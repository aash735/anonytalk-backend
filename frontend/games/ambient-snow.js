/*
 * AMBIENT SNOW - PEACEFUL GESTURE PARTICLES
 * Falling snow with gesture trails inspired by gesture-particles-snowy
 * 
 * GESTURE SMOOTHING:
 * - LERP smoothing with factor 0.2 for smooth trails
 * - Trail particles emit from hand positions
 * - Ambient snowfall with drift and swirl
 * 
 * CONTROLS:
 * - Move hands to create colorful particle trails
 * - Ambient snow falls continuously
 * - Peaceful, meditative atmosphere
 */

const video = document.getElementById('webcam');
const output = document.getElementById('output');
const canvas = document.getElementById('scene');
const status = document.getElementById('status');

let scene, camera, renderer;
let snowParticles, trailParticles;
let hands = [];
const smoothedHands = [];
const LERP_FACTOR = 0.2;

const snowCount = 1000;
const trailCount = 500;
let trailIndex = 0;

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const snowGeometry = new THREE.BufferGeometry();
    const snowPositions = new Float32Array(snowCount * 3);
    const snowVelocities = new Float32Array(snowCount * 3);
    
    for (let i = 0; i < snowCount; i++) {
        snowPositions[i * 3] = (Math.random() - 0.5) * 150;
        snowPositions[i * 3 + 1] = Math.random() * 100 + 50;
        snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        
        snowVelocities[i * 3] = (Math.random() - 0.5) * 0.1;
        snowVelocities[i * 3 + 1] = -0.2 - Math.random() * 0.3;
        snowVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }
    
    snowGeometry.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3));
    snowGeometry.velocities = snowVelocities;
    
    const snowMaterial = new THREE.PointsMaterial({
        size: 2,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    snowParticles = new THREE.Points(snowGeometry, snowMaterial);
    scene.add(snowParticles);
    
    const trailGeometry = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(trailCount * 3);
    const trailColors = new Float32Array(trailCount * 3);
    const trailOpacities = new Float32Array(trailCount);
    
    for (let i = 0; i < trailCount; i++) {
        trailPositions[i * 3] = 0;
        trailPositions[i * 3 + 1] = 0;
        trailPositions[i * 3 + 2] = -100;
        
        trailOpacities[i] = 0;
    }
    
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailGeometry.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));
    trailGeometry.opacities = trailOpacities;
    
    const trailMaterial = new THREE.PointsMaterial({
        size: 3,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
    });
    
    trailParticles = new THREE.Points(trailGeometry, trailMaterial);
    scene.add(trailParticles);
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    updateSnow();
    updateTrails();
    
    renderer.render(scene, camera);
}

function updateSnow() {
    const positions = snowParticles.geometry.attributes.position.array;
    const velocities = snowParticles.geometry.velocities;
    
    for (let i = 0; i < snowCount; i++) {
        const idx = i * 3;
        
        velocities[idx] += (Math.random() - 0.5) * 0.02;
        velocities[idx] *= 0.99;
        
        positions[idx] += velocities[idx];
        positions[idx + 1] += velocities[idx + 1];
        positions[idx + 2] += velocities[idx + 2];
        
        if (positions[idx + 1] < -50) {
            positions[idx + 1] = 50;
            positions[idx] = (Math.random() - 0.5) * 150;
            positions[idx + 2] = (Math.random() - 0.5) * 50;
        }
        
        if (Math.abs(positions[idx]) > 75) {
            positions[idx] = (Math.random() - 0.5) * 150;
        }
        if (Math.abs(positions[idx + 2]) > 30) {
            positions[idx + 2] = (Math.random() - 0.5) * 50;
        }
    }
    
    snowParticles.geometry.attributes.position.needsUpdate = true;
}

function updateTrails() {
    const positions = trailParticles.geometry.attributes.position.array;
    const colors = trailParticles.geometry.attributes.color.array;
    const opacities = trailParticles.geometry.opacities;
    
    for (let i = 0; i < trailCount; i++) {
        opacities[i] *= 0.95;
    }
    
    smoothedHands.forEach((hand, handIdx) => {
        for (let i = 0; i < 3; i++) {
            const idx = trailIndex * 3;
            
            positions[idx] = hand.x + (Math.random() - 0.5) * 2;
            positions[idx + 1] = hand.y + (Math.random() - 0.5) * 2;
            positions[idx + 2] = hand.z + (Math.random() - 0.5) * 2;
            
            const hue = (handIdx * 0.5 + Date.now() * 0.0001) % 1;
            const color = new THREE.Color();
            color.setHSL(hue, 0.8, 0.6);
            
            colors[idx] = color.r;
            colors[idx + 1] = color.g;
            colors[idx + 2] = color.b;
            
            opacities[trailIndex] = 1;
            
            trailIndex = (trailIndex + 1) % trailCount;
        }
    });
    
    for (let i = 0; i < trailCount; i++) {
        const alpha = opacities[i];
        colors[i * 3] *= alpha;
        colors[i * 3 + 1] *= alpha;
        colors[i * 3 + 2] *= alpha;
    }
    
    trailParticles.geometry.attributes.position.needsUpdate = true;
    trailParticles.geometry.attributes.color.needsUpdate = true;
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
    
    if (hands.length > 0 && status.textContent !== 'Hands detected - Move to create trails') {
        status.textContent = 'Hands detected - Move to create trails';
    } else if (hands.length === 0 && status.textContent !== 'Show your hands to the camera') {
        status.textContent = 'Show your hands to the camera';
    }
    
    updateSmoothedHands();
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