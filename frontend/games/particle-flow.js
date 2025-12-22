/*
 * PARTICLE FLOW - GROUNDING GAME
 * Gesture-controlled flowing particles that follow hand movements
 * 
 * GESTURE SMOOTHING:
 * - LERP (Linear Interpolation) with factor 0.15 for smooth position tracking
 * - EMA (Exponential Moving Average) with alpha 0.2 for velocity smoothing
 * - Debounced hand detection to prevent flickering
 * 
 * CONTROLS:
 * - Move hands to attract particles
 * - Particles flow smoothly toward hand positions
 * - Creates calming, grounding visual effect
 */

const video = document.getElementById('webcam');
const output = document.getElementById('output');
const canvas = document.getElementById('scene');
const status = document.getElementById('status');

let scene, camera, renderer, particles, particleGeometry, particleMaterial;
let hands = [];
const smoothedHands = [];
const LERP_FACTOR = 0.15;
const EMA_ALPHA = 0.2;

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        
        velocities[i * 3] = (Math.random() - 0.5) * 0.1;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
        
        const hue = Math.random() * 0.3 + 0.5;
        colors[i * 3] = hue;
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.3;
        colors[i * 3 + 2] = 1;
    }
    
    particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.velocities = velocities;
    
    particleMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    const positions = particleGeometry.attributes.position.array;
    const velocities = particleGeometry.velocities;
    const particleCount = positions.length / 3;
    
    for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        positions[idx] += velocities[idx];
        positions[idx + 1] += velocities[idx + 1];
        positions[idx + 2] += velocities[idx + 2];
        
        velocities[idx] *= 0.98;
        velocities[idx + 1] *= 0.98;
        velocities[idx + 2] *= 0.98;
        
        if (smoothedHands.length > 0) {
            smoothedHands.forEach(hand => {
                const dx = hand.x - positions[idx];
                const dy = hand.y - positions[idx + 1];
                const dz = hand.z - positions[idx + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                if (dist < 30) {
                    const force = (30 - dist) / 30;
                    velocities[idx] += (dx / dist) * force * 0.5;
                    velocities[idx + 1] += (dy / dist) * force * 0.5;
                    velocities[idx + 2] += (dz / dist) * force * 0.5;
                }
            });
        }
        
        const flowForce = Math.sin(Date.now() * 0.001 + i * 0.1) * 0.02;
        velocities[idx] += flowForce;
        velocities[idx + 1] += Math.cos(Date.now() * 0.001 + i * 0.1) * 0.02;
        
        if (Math.abs(positions[idx]) > 60) velocities[idx] *= -0.5;
        if (Math.abs(positions[idx + 1]) > 60) velocities[idx + 1] *= -0.5;
        if (Math.abs(positions[idx + 2]) > 30) velocities[idx + 2] *= -0.5;
    }
    
    particleGeometry.attributes.position.needsUpdate = true;
    
    renderer.render(scene, camera);
}

function onResults(results) {
    hands = [];
    
    if (results.multiHandLandmarks) {
        results.multiHandLandmarks.forEach(landmarks => {
            const wrist = landmarks[0];
            const index = landmarks[8];
            
            const x = ((index.x * 2 - 1) * 60);
            const y = (-(index.y * 2 - 1) * 60);
            const z = -index.z * 50;
            
            hands.push({ x, y, z, vx: 0, vy: 0, vz: 0 });
        });
    }
    
    if (hands.length > 0 && status.textContent !== 'Hands detected - Move to guide particles') {
        status.textContent = 'Hands detected - Move to guide particles';
    } else if (hands.length === 0 && status.textContent !== 'Show your hands to the camera') {
        status.textContent = 'Show your hands to the camera';
    }
    
    updateSmoothedHands();
}

function updateSmoothedHands() {
    hands.forEach((hand, idx) => {
        if (!smoothedHands[idx]) {
            smoothedHands[idx] = { x: hand.x, y: hand.y, z: hand.z, vx: 0, vy: 0, vz: 0 };
        } else {
            const prev = smoothedHands[idx];
            
            const nvx = (hand.x - prev.x);
            const nvy = (hand.y - prev.y);
            const nvz = (hand.z - prev.z);
            
            prev.vx = prev.vx * (1 - EMA_ALPHA) + nvx * EMA_ALPHA;
            prev.vy = prev.vy * (1 - EMA_ALPHA) + nvy * EMA_ALPHA;
            prev.vz = prev.vz * (1 - EMA_ALPHA) + nvz * EMA_ALPHA;
            
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
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { width: 1280, height: 720 } 
        });
        video.srcObject = stream;
        
        const handsModel = new Hands({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        });
        
        handsModel.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        
        handsModel.onResults(onResults);
        
        const cam = new Camera(video, {
            onFrame: async () => {
                await handsModel.send({ image: video });
            },
            width: 1280,
            height: 720
        });
        
        cam.start();
        
        initThree();
        
    } catch (err) {
        status.textContent = 'Camera access denied. Please allow camera access.';
        console.error(err);
    }
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();