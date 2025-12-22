/*
 * SHAPE MORPH - EXPRESSION GAME
 * Particles morph between geometric shapes on pinch gestures
 * 
 * GESTURE SMOOTHING:
 * - Pinch detection with hysteresis (0.05/0.08 thresholds)
 * - Debounced shape transitions (500ms cooldown)
 * - Smooth interpolation between shape states
 * 
 * CONTROLS:
 * - Pinch to cycle through shapes: Sphere → Cube → Torus → Helix → Sphere
 * - Particles smoothly morph between geometries
 * - Continuous rotation for visual interest
 */

const video = document.getElementById('webcam');
const output = document.getElementById('output');
const canvas = document.getElementById('scene');
const status = document.getElementById('status');

let scene, camera, renderer, particles;
let hands = [];
const smoothedHands = [];
const LERP_FACTOR = 0.15;
const PINCH_THRESHOLD = 0.05;
const PINCH_RELEASE = 0.08;

let currentShape = 0;
const shapes = ['Sphere', 'Cube', 'Torus', 'Helix'];
let morphProgress = 1;
let lastPinchTime = 0;
const PINCH_COOLDOWN = 500;

const particleCount = 2000;
let positions, targetPositions;

function generateSphere(count) {
    const pos = [];
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 20;
        
        pos.push(
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.sin(phi) * Math.sin(theta),
            r * Math.cos(phi)
        );
    }
    return pos;
}

function generateCube(count) {
    const pos = [];
    for (let i = 0; i < count; i++) {
        const face = Math.floor(Math.random() * 6);
        const u = Math.random() * 40 - 20;
        const v = Math.random() * 40 - 20;
        
        switch(face) {
            case 0: pos.push(20, u, v); break;
            case 1: pos.push(-20, u, v); break;
            case 2: pos.push(u, 20, v); break;
            case 3: pos.push(u, -20, v); break;
            case 4: pos.push(u, v, 20); break;
            case 5: pos.push(u, v, -20); break;
        }
    }
    return pos;
}

function generateTorus(count) {
    const pos = [];
    const R = 15, r = 8;
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        
        pos.push(
            (R + r * Math.cos(phi)) * Math.cos(theta),
            (R + r * Math.cos(phi)) * Math.sin(theta),
            r * Math.sin(phi)
        );
    }
    return pos;
}

function generateHelix(count) {
    const pos = [];
    for (let i = 0; i < count; i++) {
        const t = (i / count) * Math.PI * 8;
        const r = 10;
        
        pos.push(
            r * Math.cos(t),
            t * 2 - 25,
            r * Math.sin(t)
        );
    }
    return pos;
}

function getShapePositions(shapeIndex) {
    switch(shapeIndex) {
        case 0: return generateSphere(particleCount);
        case 1: return generateCube(particleCount);
        case 2: return generateTorus(particleCount);
        case 3: return generateHelix(particleCount);
        default: return generateSphere(particleCount);
    }
}

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 70;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const geometry = new THREE.BufferGeometry();
    positions = new Float32Array(getShapePositions(currentShape));
    targetPositions = new Float32Array(positions);
    
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        const color = new THREE.Color();
        color.setHSL(i / particleCount, 0.8, 0.6);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    if (morphProgress < 1) {
        morphProgress += 0.02;
        
        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] += (targetPositions[i] - positions[i]) * 0.1;
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
    }
    
    particles.rotation.y += 0.003;
    particles.rotation.x += 0.001;
    
    renderer.render(scene, camera);
}

function morphToNextShape() {
    const now = Date.now();
    if (now - lastPinchTime < PINCH_COOLDOWN) return;
    
    lastPinchTime = now;
    currentShape = (currentShape + 1) % shapes.length;
    targetPositions = new Float32Array(getShapePositions(currentShape));
    morphProgress = 0;
    
    status.textContent = `Morphing to ${shapes[currentShape]}...`;
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
            const pinchDist = getPinchDistance(landmarks);
            hands.push({ pinchDist });
        });
    }
    
    if (hands.length > 0 && morphProgress >= 1) {
        status.textContent = `${shapes[currentShape]} - Pinch to morph`;
    } else if (hands.length === 0 && morphProgress >= 1) {
        status.textContent = 'Show your hands to the camera';
    }
    
    updateSmoothedHands();
    checkPinches();
}

function updateSmoothedHands() {
    hands.forEach((hand, idx) => {
        if (!smoothedHands[idx]) {
            smoothedHands[idx] = { 
                pinchDist: hand.pinchDist,
                isPinching: false
            };
        } else {
            smoothedHands[idx].pinchDist = hand.pinchDist;
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
            morphToNextShape();
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