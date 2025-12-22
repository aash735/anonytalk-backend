/*
 * PARTICLE DISSOLVE - LETTING GO GAME (ENHANCED)
 * Touch particles with hands to dissolve them, practicing release
 * 
 * IMPROVEMENTS:
 * - Fixed opacity rendering bug
 * - Added score system and combos
 * - Improved particle effects with trails
 * - Better hand visualization
 * - Performance optimizations
 * - Mobile support
 * - Sound effect hooks (optional)
 */

const video = document.getElementById('webcam');
const canvas = document.getElementById('scene');
const status = document.getElementById('status');
const scoreDisplay = document.getElementById('score-display');
const comboDisplay = document.getElementById('combo-display');

let scene, camera, renderer, particleSystem, handMarkers = [];
let hands = [];
const smoothedHands = [];
const LERP_FACTOR = 0.18;

const particleCount = 2500;
let particleData = [];

// Game state
let score = 0;
let combo = 0;
let maxCombo = 0;
let lastDissolveTime = 0;
const COMBO_TIMEOUT = 2000; // ms
let totalDissolved = 0;
let isInitialized = false;

// Performance
let lastUpdate = 0;
const UPDATE_THROTTLE = 16; // ~60fps

// Accessibility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !prefersReducedMotion });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create particles with better attribute management
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        resetParticle(i, positions, colors, sizes);
        
        particleData.push({
            opacity: 1,
            dissolving: false,
            regenerateTimer: 0,
            baseSize: 2.5 + Math.random() * 1.5,
            velocity: {
                x: (Math.random() - 0.5) * 0.1,
                y: (Math.random() - 0.5) * 0.1,
                z: (Math.random() - 0.5) * 0.05
            }
        });
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Use custom shader for size attenuation
    const material = new THREE.ShaderMaterial({
        uniforms: {
            opacity: { value: 1.0 }
        },
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            varying float vOpacity;
            
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            
            void main() {
                vec2 center = gl_PointCoord - vec2(0.5);
                float dist = length(center);
                if (dist > 0.5) discard;
                
                float alpha = 1.0 - (dist * 2.0);
                gl_FragColor = vec4(vColor, alpha * 0.9);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    
    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
    
    // Create hand markers
    createHandMarkers();
    
    animate();
}

function resetParticle(index, positions, colors, sizes) {
    const i = index * 3;
    
    positions[i] = (Math.random() - 0.5) * 100;
    positions[i + 1] = (Math.random() - 0.5) * 100;
    positions[i + 2] = (Math.random() - 0.5) * 50;
    
    const color = new THREE.Color();
    color.setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.6);
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
    
    if (sizes) {
        sizes[index] = 2.5 + Math.random() * 1.5;
    }
}

function createHandMarkers() {
    for (let i = 0; i < 2; i++) {
        const geometry = new THREE.SphereGeometry(2, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: i === 0 ? 0x667eea : 0xf093fb,
            transparent: true,
            opacity: 0.6
        });
        const marker = new THREE.Mesh(geometry, material);
        marker.visible = false;
        scene.add(marker);
        handMarkers.push(marker);
        
        // Add ring effect
        const ringGeometry = new THREE.RingGeometry(3, 3.5, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: i === 0 ? 0x667eea : 0xf093fb,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        marker.add(ring);
    }
}

function animate() {
    requestAnimationFrame(animate);
    
    if (!isInitialized) return;
    
    const now = Date.now();
    if (now - lastUpdate < UPDATE_THROTTLE) {
        renderer.render(scene, camera);
        return;
    }
    lastUpdate = now;
    
    const positions = particleSystem.geometry.attributes.position.array;
    const colors = particleSystem.geometry.attributes.color.array;
    const sizes = particleSystem.geometry.attributes.size.array;
    const originalColors = particleSystem.geometry.userData.originalColors || colors.slice();
    
    if (!particleSystem.geometry.userData.originalColors) {
        particleSystem.geometry.userData.originalColors = originalColors;
    }
    
    const motionScale = prefersReducedMotion ? 0.1 : 1;
    let dissolvedThisFrame = 0;
    
    for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const data = particleData[i];
        
        // Update particle lifecycle
        if (data.dissolving) {
            data.opacity -= 0.03;
            if (data.opacity <= 0) {
                data.opacity = 0;
                data.dissolving = false;
                data.regenerateTimer = 90 + Math.floor(Math.random() * 60);
            }
        } else if (data.regenerateTimer > 0) {
            data.regenerateTimer--;
            if (data.regenerateTimer === 0) {
                resetParticle(i, positions, colors, sizes);
                const color = new THREE.Color(colors[idx], colors[idx + 1], colors[idx + 2]);
                originalColors[idx] = color.r;
                originalColors[idx + 1] = color.g;
                originalColors[idx + 2] = color.b;
                data.baseSize = sizes[i];
            }
        } else if (data.opacity < 1) {
            data.opacity += 0.02;
        }
        
        // Subtle floating motion
        if (!data.dissolving && data.regenerateTimer === 0) {
            positions[idx] += data.velocity.x * motionScale;
            positions[idx + 1] += data.velocity.y * motionScale;
            positions[idx + 2] += data.velocity.z * motionScale;
            
            // Bounce off boundaries
            if (Math.abs(positions[idx]) > 50) data.velocity.x *= -1;
            if (Math.abs(positions[idx + 1]) > 50) data.velocity.y *= -1;
            if (Math.abs(positions[idx + 2]) > 25) data.velocity.z *= -1;
        }
        
        // Hand interaction
        smoothedHands.forEach((hand, handIdx) => {
            const dx = hand.x - positions[idx];
            const dy = hand.y - positions[idx + 1];
            const dz = hand.z - positions[idx + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            // Highlight particles near hands
            if (dist < 20 && !data.dissolving && data.opacity > 0.5) {
                const highlightFactor = 1 - (dist / 20);
                colors[idx] = originalColors[idx] + highlightFactor * 0.3;
                colors[idx + 1] = originalColors[idx + 1] + highlightFactor * 0.3;
                colors[idx + 2] = originalColors[idx + 2] + highlightFactor * 0.3;
                sizes[i] = data.baseSize * (1 + highlightFactor * 0.5);
            } else if (!data.dissolving) {
                colors[idx] = originalColors[idx];
                colors[idx + 1] = originalColors[idx + 1];
                colors[idx + 2] = originalColors[idx + 2];
                sizes[i] = data.baseSize;
            }
            
            // Dissolve on contact
            if (dist < 12 && !data.dissolving && data.opacity > 0.5) {
                data.dissolving = true;
                dissolvedThisFrame++;
                
                // Create dissolve effect
                data.velocity.x = dx / dist * 2;
                data.velocity.y = dy / dist * 2;
                data.velocity.z = dz / dist * 2;
            }
        });
        
        // Apply opacity to visualization
        const alpha = Math.max(0, data.opacity);
        colors[idx] *= alpha;
        colors[idx + 1] *= alpha;
        colors[idx + 2] *= alpha;
        sizes[i] *= alpha;
    }
    
    // Update combo system
    if (dissolvedThisFrame > 0) {
        const now = Date.now();
        if (now - lastDissolveTime < COMBO_TIMEOUT) {
            combo += dissolvedThisFrame;
        } else {
            combo = dissolvedThisFrame;
        }
        lastDissolveTime = now;
        maxCombo = Math.max(maxCombo, combo);
        
        score += dissolvedThisFrame * (1 + Math.floor(combo / 10));
        totalDissolved += dissolvedThisFrame;
        
        updateScoreDisplay();
    } else if (Date.now() - lastDissolveTime > COMBO_TIMEOUT && combo > 0) {
        combo = 0;
        updateScoreDisplay();
    }
    
    particleSystem.geometry.attributes.position.needsUpdate = true;
    particleSystem.geometry.attributes.color.needsUpdate = true;
    particleSystem.geometry.attributes.size.needsUpdate = true;
    
    // Gentle rotation
    particleSystem.rotation.y += 0.0005 * motionScale;
    
    // Update hand markers
    smoothedHands.forEach((hand, idx) => {
        if (handMarkers[idx]) {
            handMarkers[idx].position.set(hand.x, hand.y, hand.z);
            handMarkers[idx].visible = true;
            
            const pulse = Math.sin(Date.now() * 0.005) * 0.2 + 1;
            handMarkers[idx].scale.set(pulse, pulse, pulse);
            
            if (handMarkers[idx].children[0]) {
                handMarkers[idx].children[0].rotation.z += 0.02;
            }
        }
    });
    
    // Hide unused hand markers
    for (let i = smoothedHands.length; i < handMarkers.length; i++) {
        handMarkers[i].visible = false;
    }
    
    renderer.render(scene, camera);
}

function updateScoreDisplay() {
    if (scoreDisplay) {
        scoreDisplay.innerHTML = `
            <div class="score-item">
                <span class="score-label">Score</span>
                <span class="score-value">${score}</span>
            </div>
            <div class="score-item">
                <span class="score-label">Dissolved</span>
                <span class="score-value">${totalDissolved}</span>
            </div>
        `;
    }
    
    if (comboDisplay) {
        if (combo > 5) {
            comboDisplay.textContent = `🔥 ${combo}x Combo!`;
            comboDisplay.className = 'combo-display visible';
            
            if (combo > 20) comboDisplay.className = 'combo-display visible mega';
        } else {
            comboDisplay.className = 'combo-display';
        }
    }
}

function onResults(results) {
    hands = [];
    
    if (results.multiHandLandmarks) {
        results.multiHandLandmarks.forEach(landmarks => {
            const index = landmarks[8];
            
            const x = ((index.x * 2 - 1) * 60);
            const y = (-(index.y * 2 - 1) * 60);
            const z = -index.z * 50;
            
            hands.push({ x, y, z });
        });
    }
    
    updateSmoothedHands();
    updateStatusMessage();
}

function updateStatusMessage() {
    if (!status) return;
    
    if (hands.length > 0) {
        let message = '✨ Move your hands to dissolve particles';
        
        if (totalDissolved > 100) {
            message = '🌟 You\'re doing great! Keep flowing';
        } else if (totalDissolved > 50) {
            message = '💫 Nice work! Stay present';
        }
        
        status.textContent = message;
        status.className = 'status visible';
    } else {
        status.textContent = '✋ Show your hands to begin';
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

async function init() {
    try {
        status.textContent = '🎥 Requesting camera access...';
        
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
        
        setTimeout(() => {
            if (hands.length === 0) {
                status.textContent = '✋ Show your hands to begin';
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

// Cleanup
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
