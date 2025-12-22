/*
 * PORTAL CONJURING - DOCTOR STRANGE STYLE
 * Draw circular motions to create magical portals
 * 
 * GESTURE SMOOTHING:
 * - Trail tracking with position history (30 frames)
 * - Circular motion detection via angle accumulation
 * - Debounced portal creation (2 second cooldown)
 * 
 * CONTROLS:
 * - Move hand in circular motion to conjure portal
 * - Complete circle triggers portal spawn
 * - Portals rotate and emit particles
 */

const video = document.getElementById('webcam');
const output = document.getElementById('output');
const canvas = document.getElementById('scene');
const status = document.getElementById('status');

let scene, camera, renderer;
let portals = [];
let hands = [];
const trailHistory = [];
const TRAIL_LENGTH = 30;
const CIRCLE_THRESHOLD = Math.PI * 1.5;
let lastPortalTime = 0;
const PORTAL_COOLDOWN = 2000;

class Portal {
    constructor(x, y, z) {
        this.position = new THREE.Vector3(x, y, z);
        this.age = 0;
        this.maxAge = 300;
        this.rings = [];
        
        const ringCount = 5;
        for (let i = 0; i < ringCount; i++) {
            const geometry = new THREE.RingGeometry(
                8 + i * 2, 
                9 + i * 2, 
                32
            );
            
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(0.1 + i * 0.05, 0.9, 0.5),
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.8 - i * 0.1,
                blending: THREE.AdditiveBlending
            });
            
            const ring = new THREE.Mesh(geometry, material);
            ring.position.copy(this.position);
            this.rings.push(ring);
            scene.add(ring);
        }
        
        this.particles = [];
        const pCount = 100;
        for (let i = 0; i < pCount; i++) {
            const angle = (i / pCount) * Math.PI * 2;
            const radius = 10 + Math.random() * 5;
            
            const geo = new THREE.SphereGeometry(0.3, 8, 8);
            const mat = new THREE.MeshBasicMaterial({
                color: new THREE.Color().setHSL(0.1 + Math.random() * 0.1, 0.9, 0.6),
                transparent: true,
                opacity: 0.9
            });
            
            const particle = new THREE.Mesh(geo, mat);
            particle.userData = {
                angle,
                radius,
                speed: 0.02 + Math.random() * 0.03
            };
            
            scene.add(particle);
            this.particles.push(particle);
        }
    }
    
    update() {
        this.age++;
        
        const life = 1 - (this.age / this.maxAge);
        
        this.rings.forEach((ring, i) => {
            ring.rotation.z += 0.01 * (i + 1);
            ring.material.opacity = (0.8 - i * 0.1) * life;
        });
        
        this.particles.forEach(p => {
            p.userData.angle += p.userData.speed;
            const x = this.position.x + Math.cos(p.userData.angle) * p.userData.radius;
            const y = this.position.y + Math.sin(p.userData.angle) * p.userData.radius;
            const z = this.position.z + Math.sin(p.userData.angle * 2) * 3;
            
            p.position.set(x, y, z);
            p.material.opacity = 0.9 * life;
        });
        
        return this.age < this.maxAge;
    }
    
    destroy() {
        this.rings.forEach(ring => {
            scene.remove(ring);
            ring.geometry.dispose();
            ring.material.dispose();
        });
        
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
    camera.position.z = 70;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    portals = portals.filter(portal => {
        const alive = portal.update();
        if (!alive) portal.destroy();
        return alive;
    });
    
    renderer.render(scene, camera);
}

function detectCircularMotion() {
    if (trailHistory.length < TRAIL_LENGTH) return false;
    
    let angleSum = 0;
    
    for (let i = 1; i < trailHistory.length; i++) {
        const prev = trailHistory[i - 1];
        const curr = trailHistory[i];
        
        const dx = curr.x - prev.x;
        const dy = curr.y - prev.y;
        
        if (dx !== 0 || dy !== 0) {
            const angle = Math.atan2(dy, dx);
            if (i > 1) {
                const prevAngle = Math.atan2(
                    trailHistory[i - 1].y - trailHistory[i - 2].y,
                    trailHistory[i - 1].x - trailHistory[i - 2].x
                );
                let deltaAngle = angle - prevAngle;
                
                while (deltaAngle > Math.PI) deltaAngle -= Math.PI * 2;
                while (deltaAngle < -Math.PI) deltaAngle += Math.PI * 2;
                
                angleSum += Math.abs(deltaAngle);
            }
        }
    }
    
    return angleSum > CIRCLE_THRESHOLD;
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
            
            trailHistory.push({ x, y, z });
            if (trailHistory.length > TRAIL_LENGTH) {
                trailHistory.shift();
            }
            
            if (detectCircularMotion()) {
                const now = Date.now();
                if (now - lastPortalTime > PORTAL_COOLDOWN) {
                    portals.push(new Portal(x, y, z));
                    lastPortalTime = now;
                    status.textContent = 'Portal conjured!';
                    trailHistory.length = 0;
                }
            }
        });
    } else {
        trailHistory.length = 0;
    }
    
    if (hands.length > 0 && Date.now() - lastPortalTime > 1000) {
        status.textContent = 'Draw circles to conjure portals';
    } else if (hands.length === 0) {
        status.textContent = 'Show your hands to the camera';
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