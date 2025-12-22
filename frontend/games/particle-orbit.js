/*
 * PARTICLE ORBIT - FOCUS GAME
 * Particles orbit around hand positions creating mesmerizing patterns
 * 
 * GESTURE SMOOTHING:
 * - LERP with factor 0.12 for ultra-smooth orbital centers
 * - EMA velocity tracking for natural movement
 * - Orbital velocity adjusts based on hand speed
 * 
 * CONTROLS:
 * - Move hands to create orbital centers
 * - Particles orbit smoothly around each hand
 * - Multiple hands create interconnected orbital systems
 */

const video = document.getElementById('webcam');
const output = document.getElementById('output');
const canvas = document.getElementById('scene');
const status = document.getElementById('status');

let scene, camera, renderer, orbitSystems;
let hands = [];
const smoothedHands = [];
const LERP_FACTOR = 0.12;
const EMA_ALPHA = 0.15;

class OrbitSystem {
    constructor(handIndex) {
        this.handIndex = handIndex;
        this.particles = [];
        this.center = new THREE.Vector3(0, 0, 0);
        
        const count = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        const hue = Math.random();
        
        for (let i = 0; i < count; i++) {
            const radius = 5 + Math.random() * 15;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
            
            const color = new THREE.Color();
            color.setHSL(hue, 0.8, 0.5 + Math.random() * 0.3);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
            
            this.particles.push({
                radius,
                theta,
                phi,
                angularSpeed: 0.01 + Math.random() * 0.02
            });
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 2.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending
        });
        
        this.points = new THREE.Points(geometry, material);
        scene.add(this.points);
    }
    
    update(handPos) {
        if (!handPos) return false;
        
        this.center.x += (handPos.x - this.center.x) * LERP_FACTOR;
        this.center.y += (handPos.y - this.center.y) * LERP_FACTOR;
        this.center.z += (handPos.z - this.center.z) * LERP_FACTOR;
        
        const positions = this.points.geometry.attributes.position.array;
        
        const speedMultiplier = 1 + (handPos.vx * handPos.vx + handPos.vy * handPos.vy) * 0.5;
        
        this.particles.forEach((p, i) => {
            p.theta += p.angularSpeed * speedMultiplier;
            p.phi += p.angularSpeed * 0.5;
            
            const x = p.radius * Math.sin(p.phi) * Math.cos(p.theta);
            const y = p.radius * Math.sin(p.phi) * Math.sin(p.theta);
            const z = p.radius * Math.cos(p.phi);
            
            positions[i * 3] = this.center.x + x;
            positions[i * 3 + 1] = this.center.y + y;
            positions[i * 3 + 2] = this.center.z + z;
        });
        
        this.points.geometry.attributes.position.needsUpdate = true;
        
        return true;
    }
    
    destroy() {
        scene.remove(this.points);
        this.points.geometry.dispose();
        this.points.material.dispose();
    }
}

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    orbitSystems = [];
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    while (orbitSystems.length > smoothedHands.length) {
        const system = orbitSystems.pop();
        system.destroy();
    }
    
    while (orbitSystems.length < smoothedHands.length) {
        orbitSystems.push(new OrbitSystem(orbitSystems.length));
    }
    
    orbitSystems.forEach((system, idx) => {
        system.update(smoothedHands[idx]);
    });
    
    renderer.render(scene, camera);
}

function onResults(results) {
    hands = [];
    
    if (results.multiHandLandmarks) {
        results.multiHandLandmarks.forEach(landmarks => {
            const index = landmarks[8];
            
            const x = ((index.x * 2 - 1) * 50);
            const y = (-(index.y * 2 - 1) * 50);
            const z = -index.z * 40;
            
            hands.push({ x, y, z, vx: 0, vy: 0, vz: 0 });
        });
    }
    
    if (hands.length > 0 && status.textContent !== 'Hands detected - Move to control orbits') {
        status.textContent = 'Hands detected - Move to control orbits';
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