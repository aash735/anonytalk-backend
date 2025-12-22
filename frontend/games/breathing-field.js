/*
 * BREATHING FIELD - REGULATION GAME (ENHANCED)
 * Pulsing particle field that responds to hand distance for breathing regulation
 * 
 * IMPROVEMENTS:
 * - Fixed geometry update bugs
 * - Added breathing guidance visual
 * - Improved performance with throttled updates
 * - Added session tracking and encouragement
 * - Better error handling and fallbacks
 * - Reduced motion support
 * - Mobile optimizations
 */

const video = document.getElementById('webcam');
const canvas = document.getElementById('scene');
const status = document.getElementById('status');
const breathingGuide = document.getElementById('breathing-guide');
const sessionStats = document.getElementById('session-stats');

let scene, camera, renderer, particleField, guideCircle;
let hands = [];
const smoothedHands = [];
const LERP_FACTOR = 0.1;
const EMA_ALPHA = 0.1;

let breathingRate = 1;
let smoothedDistance = 50;
const gridSize = 40;

// Session tracking
let sessionStartTime = Date.now();
let totalBreaths = 0;
let calmMoments = 0;
let lastBreathPhase = 0;
let isInitialized = false;

// Performance optimization
let lastStatusUpdate = 0;
const STATUS_UPDATE_THROTTLE = 100; // ms

// Accessibility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !prefersReducedMotion });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
    
    // Create particle field
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(gridSize * gridSize * 3);
    const colors = new Float32Array(gridSize * gridSize * 3);
    const basePositions = new Float32Array(gridSize * gridSize * 3); // Store base positions
    
    let idx = 0;
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const baseX = (x - gridSize / 2) * 3;
            const baseY = (y - gridSize / 2) * 3;
            
            positions[idx * 3] = baseX;
            positions[idx * 3 + 1] = baseY;
            positions[idx * 3 + 2] = 0;
            
            basePositions[idx * 3] = baseX;
            basePositions[idx * 3 + 1] = baseY;
            basePositions[idx * 3 + 2] = 0;
            
            const color = new THREE.Color();
            color.setHSL(0.55 + (x / gridSize) * 0.1, 0.7, 0.6);
            colors[idx * 3] = color.r;
            colors[idx * 3 + 1] = color.g;
            colors[idx * 3 + 2] = color.b;
            
            idx++;
        }
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.userData.basePositions = basePositions;
    
    const material = new THREE.PointsMaterial({
        size: 3,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    particleField = new THREE.Points(geometry, material);
    scene.add(particleField);
    
    // Create breathing guide circle
    createBreathingGuide();
    
    animate();
}

function createBreathingGuide() {
    const geometry = new THREE.RingGeometry(8, 9, 64);
    const material = new THREE.MeshBasicMaterial({
        color: 0x667eea,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });
    
    guideCircle = new THREE.Mesh(geometry, material);
    guideCircle.position.z = 0;
    scene.add(guideCircle);
}

function animate() {
    requestAnimationFrame(animate);
    
    if (!isInitialized) return;
    
    const positions = particleField.geometry.attributes.position.array;
    const basePositions = particleField.geometry.userData.basePositions;
    const time = Date.now() * 0.001 * breathingRate;
    
    // Track breathing phase for breath counting
    const breathPhase = Math.sin(time * 2);
    if (lastBreathPhase < 0 && breathPhase >= 0) {
        totalBreaths++;
        updateSessionStats();
    }
    lastBreathPhase = breathPhase;
    
    // Update particles with wave motion
    const motionScale = prefersReducedMotion ? 0.3 : 1;
    let idx = 0;
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const baseX = basePositions[idx * 3];
            const baseY = basePositions[idx * 3 + 1];
            
            const dist = Math.sqrt(baseX * baseX + baseY * baseY);
            const wave = Math.sin(dist * 0.1 - time) * 5 * motionScale;
            const pulse = Math.sin(time * 2) * 3 * motionScale;
            
            positions[idx * 3] = baseX;
            positions[idx * 3 + 1] = baseY;
            positions[idx * 3 + 2] = wave + pulse;
            
            idx++;
        }
    }
    
    particleField.geometry.attributes.position.needsUpdate = true;
    
    // Animate breathing guide
    if (guideCircle) {
        const scale = 1 + Math.sin(time * 2) * 0.3 * motionScale;
        guideCircle.scale.set(scale, scale, 1);
        guideCircle.material.opacity = 0.2 + Math.sin(time * 2) * 0.1;
        
        // Update guide text
        updateBreathingGuideText(breathPhase);
    }
    
    // Track calm moments (when breathing is slow)
    if (breathingRate < 0.8) {
        calmMoments++;
    }
    
    renderer.render(scene, camera);
}

function updateBreathingGuideText(phase) {
    if (!breathingGuide) return;
    
    const now = Date.now();
    if (now - lastStatusUpdate < STATUS_UPDATE_THROTTLE) return;
    lastStatusUpdate = now;
    
    if (phase > 0.7) {
        breathingGuide.textContent = '🌊 Breathe In';
        breathingGuide.className = 'breathing-guide inhale';
    } else if (phase < -0.7) {
        breathingGuide.textContent = '🍃 Breathe Out';
        breathingGuide.className = 'breathing-guide exhale';
    } else {
        breathingGuide.textContent = '⏸️ Hold';
        breathingGuide.className = 'breathing-guide hold';
    }
}

function updateSessionStats() {
    if (!sessionStats) return;
    
    const duration = Math.floor((Date.now() - sessionStartTime) / 1000);
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    
    sessionStats.innerHTML = `
        <div class="stat">
            <span class="stat-value">${totalBreaths}</span>
            <span class="stat-label">breaths</span>
        </div>
        <div class="stat">
            <span class="stat-value">${minutes}:${seconds.toString().padStart(2, '0')}</span>
            <span class="stat-label">time</span>
        </div>
    `;
}

function getHandDistance() {
    if (smoothedHands.length < 2) return 50;
    
    const dx = smoothedHands[0].x - smoothedHands[1].x;
    const dy = smoothedHands[0].y - smoothedHands[1].y;
    const dz = smoothedHands[0].z - smoothedHands[1].z;
    
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function onResults(results) {
    hands = [];
    
    if (results.multiHandLandmarks) {
        results.multiHandLandmarks.forEach(landmarks => {
            const index = landmarks[8];
            
            const x = ((index.x * 2 - 1) * 50);
            const y = (-(index.y * 2 - 1) * 50);
            const z = -index.z * 40;
            
            hands.push({ x, y, z });
        });
    }
    
    updateSmoothedHands();
    updateBreathingRate();
    updateStatusMessage();
}

function updateStatusMessage() {
    const now = Date.now();
    if (now - lastStatusUpdate < STATUS_UPDATE_THROTTLE) return;
    lastStatusUpdate = now;
    
    if (hands.length >= 2) {
        const rate = breathingRate.toFixed(1);
        let message = '';
        let encouragement = '';
        
        if (breathingRate < 0.6) {
            message = '🧘 Deep & Slow';
            if (calmMoments > 300) encouragement = ' - Perfect rhythm!';
        } else if (breathingRate < 0.8) {
            message = '😌 Calm & Steady';
            encouragement = ' - Great focus';
        } else if (breathingRate < 1.2) {
            message = '⚖️ Balanced';
        } else if (breathingRate < 1.5) {
            message = '⚡ Active';
        } else {
            message = '🏃 Fast & Energetic';
        }
        
        status.textContent = `${message} (${rate}×)${encouragement}`;
        status.className = 'status visible';
    } else if (hands.length === 1) {
        status.textContent = '👋 Show both hands to control breathing';
        status.className = 'status visible';
    } else {
        status.textContent = '✋ Place both hands in view';
        status.className = 'status visible';
    }
}

function updateSmoothedHands() {
    hands.forEach((hand, idx) => {
        if (!smoothedHands[idx]) {
            smoothedHands[idx] = { x: hand.x, y: hand.y, z: hand.z };
        } else {
            const prev = smoothedHands[idx];
            
            prev.x += (hand.x - prev.x) * LERP_FACTOR;
            prev.y += (hand.y - prev.y) * LERP_FACTOR;
            prev.z += (hand.z - prev.z) * LERP_FACTOR;
        }
    });
    
    if (hands.length < smoothedHands.length) {
        smoothedHands.length = hands.length;
    }
}

function updateBreathingRate() {
    const currentDist = getHandDistance();
    smoothedDistance += (currentDist - smoothedDistance) * EMA_ALPHA;
    
    breathingRate = 0.5 + (smoothedDistance / 100);
    breathingRate = Math.max(0.3, Math.min(2, breathingRate));
}

async function init() {
    try {
        status.textContent = '🎥 Requesting camera access...';
        
        // Try mobile-friendly constraints first
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const constraints = {
            video: {
                width: { ideal: isMobile ? 640 : 1280 },
                height: { ideal: isMobile ? 480 : 720 },
                facingMode: 'user'
            }
        };
        
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        
        status.textContent = '🤖 Loading hand tracking...';
        
        const handsModel = new Hands({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        });
        
        handsModel.setOptions({
            maxNumHands: 2,
            modelComplexity: isMobile ? 0 : 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        
        handsModel.onResults(onResults);
        
        const cam = new Camera(video, {
            onFrame: async () => {
                await handsModel.send({ image: video });
            },
            width: constraints.video.width.ideal,
            height: constraints.video.height.ideal
        });
        
        await cam.start();
        
        status.textContent = '✅ Ready! Show your hands';
        
        initThree();
        isInitialized = true;
        
        // Hide status after a few seconds
        setTimeout(() => {
            if (hands.length === 0) {
                status.textContent = '✋ Place both hands in view';
            }
        }, 3000);
        
    } catch (err) {
        console.error('Initialization error:', err);
        
        if (err.name === 'NotAllowedError') {
            status.textContent = '❌ Camera access denied. Please allow camera access and refresh.';
        } else if (err.name === 'NotFoundError') {
            status.textContent = '❌ No camera found. Please connect a camera.';
        } else {
            status.textContent = '❌ Failed to initialize. Please refresh and try again.';
        }
        
        status.className = 'status visible error';
    }
}

// Responsive handling
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }, 250);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
    if (renderer) {
        renderer.dispose();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.history.back();
    }
});

init();
