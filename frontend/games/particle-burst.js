/*
 * PARTICLE BURST - RELEASE GAME
 * Pinch gesture creates explosive fireworks for tension release
 * 
 * GESTURE SMOOTHING:
 * - Pinch detection with hysteresis (0.05 threshold, 0.08 release)
 * - Debounced pinch state to prevent rapid firing
 * - LERP smoothing for hand position tracking
 * 
 * CONTROLS:
 * - Pinch thumb and index finger together to create burst
 * - Multiple hands = multiple bursts
 * - Fireworks explode outward in all directions
 */

const video = document.getElementById('webcam');
const output = document.getElementById('output');
const canvas = document.getElementById('scene');
const status = document.getElementById('status');

let scene, camera, renderer;
let bursts = [];
let hands = [];
const smoothedHands = [];
const LERP_FACTOR = 0.2;
const PINCH_THRESHOLD = 0.05;
const PINCH_RELEASE = 0.08;

class Burst {
    constructor(x, y, z) {
        this.particles = [];
        const count = 150;
        
        const colors = [
            new THREE.Color(0xff1744),
            new THREE.Color(0xff9100),
            new THREE.Color(0xffea00),
            new THREE.Color(0x00e676),
            new THREE.Color(0x00b0ff),
            new THREE.Color(0xd500f9)
        ];
        
        const baseColor = colors[Math.floor(Math.random() * colors.length)];
        
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const speed = 0.5 + Math.random() * 1.5;
            
            const vx = Math.sin(phi) * Math.cos(theta) * speed;
            const vy = Math.sin(phi) * Math.sin(theta) * speed;
            const vz = Math.cos(phi) * speed;
            
            const geo = new THREE.SphereGeometry(0.3, 8, 8);
            const mat = new THREE.MeshBasicMaterial({ 
                color: baseColor,
                transparent: true,
                opacity: 1
            });
            
            const particle = new THREE.Mesh(geo, mat);
            particle.position.set(x, y, z);
            particle.velocity = { x: vx, y: vy, z: vz };
            particle.life = 1;
            
            this.particles.push(particle);
            scene.add(particle);
        }
        
        this.age = 0;
    }
    
    update() {
        this.age++;
        let alive = false;
        
        this.particles.forEach(p => {
            p.velocity.y -= 0.02;
            p.velocity.x *= 0.98;
            p.velocity.y *= 0.98;
            p.velocity.z *= 0.98;
            
            p.position.x += p.velocity.x;
            p.position.y += p.velocity.y;
            p.position.z += p.velocity.z;
            
            p.life -= 0.015;
            p.material.opacity = Math.max(0, p.life);
            
            if (p.life > 0) alive = true;
        });
        
        return alive;
    }
    
    destroy() {
        this.particles.forEach(p => {
            scene.remove(p);
            p.geometry.dispose();
            p.material.dispose();
        });
    }
}

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    bursts = bursts.filter(burst => {
        const alive = burst.update();
        if (!alive) burst.destroy();
        return alive;
    });
    
    renderer.render(scene, camera);
}

function getPinchDistance(landmarks) {
    const thumb = landmarks[4];
    const index = landmarks[8];
    
    const dx = thumb.x - index.x;
    const dy = thumb.y - index.y;
    const dz = (thumb.z || 0) - (index.z || 0);
    
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function onResults(results) {
    hands = [];
    
    if (results.multiHandLandmarks) {
        results.multiHandLandmarks.forEach(landmarks => {
            const index = landmarks[8];
            const pinchDist = getPinchDistance(landmarks);
            
            const x = ((index.x * 2 - 1) * 60);
            const y = (-(index.y * 2 - 1) * 60);
            const z = -index.z * 50;
            
            hands.push({ x, y, z, pinchDist, wasPinching: false });
        });
    }
    
    if (hands.length > 0 && status.textContent !== 'Hands detected - Pinch to burst') {
        status.textContent = 'Hands detected - Pinch to burst';
    } else if (hands.length === 0 && status.textContent !== 'Show your hands to the camera') {
        status.textContent = 'Show your hands to the camera';
    }
    
    updateSmoothedHands();
    checkPinches();
}

function updateSmoothedHands() {
    hands.forEach((hand, idx) => {
        if (!smoothedHands[idx]) {
            smoothedHands[idx] = { 
                x: hand.x, 
                y: hand.y, 
                z: hand.z, 
                pinchDist: hand.pinchDist,
                wasPinching: false,
                isPinching: false
            };
        } else {
            const prev = smoothedHands[idx];
            
            prev.x += (hand.x - prev.x) * LERP_FACTOR;
            prev.y += (hand.y - prev.y) * LERP_FACTOR;
            prev.z += (hand.z - prev.z) * LERP_FACTOR;
            prev.pinchDist = hand.pinchDist;
        }
    });
    
    if (hands.length < smoothedHands.length) {
        smoothedHands.length = hands.length;
    }
}

function checkPinches() {
    smoothedHands.forEach(hand => {
        const wasPinching = hand.isPinching || false;
        const isPinching = hand.pinchDist < (wasPinching ? PINCH_RELEASE : PINCH_THRESHOLD);
        
        if (isPinching && !wasPinching) {
            bursts.push(new Burst(hand.x, hand.y, hand.z));
        }
        
        hand.isPinching = isPinching;
    });
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