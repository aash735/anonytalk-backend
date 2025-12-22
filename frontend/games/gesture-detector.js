// Fixed: Corrected velocity calculation logic, improved smoothing, added proper error handling
class GestureDetector {
    constructor() {
        this.hands = null;
        this.camera = null;
        this.videoElement = null;
        this.onResultsCallback = null;
        
        // Smoothing parameters
        this.smoothedLandmarks = { left: null, right: null };
        this.smoothFactor = 0.3;
        this.velocitySmoothing = 0.2;
        this.previousPositions = { left: null, right: null };
        this.smoothedVelocities = { left: { x: 0, y: 0, z: 0, magnitude: 0 }, right: { x: 0, y: 0, z: 0, magnitude: 0 } };
        
        // Gesture state
        this.gestureState = {
            left: { type: 'unknown', confidence: 0, timestamp: 0 },
            right: { type: 'unknown', confidence: 0, timestamp: 0 }
        };
        
        // Debouncing
        this.gestureDebounceTime = 150;
        this.lastGestureChange = { left: 0, right: 0 };
        
        // Confidence thresholds
        this.confidenceThreshold = {
            pinch: 0.7,
            fist: 0.75,
            openPalm: 0.7
        };
    }
    
    async initialize() {
        try {
            this.videoElement = document.getElementById('video');
            
            // Initialize MediaPipe Hands
            this.hands = new Hands({
                locateFile: (file) => {
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
                }
            });
            
            this.hands.setOptions({
                maxNumHands: 2,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.7
            });
            
            this.hands.onResults((results) => this.processResults(results));
            
            // Initialize camera
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { 
                    width: 1280, 
                    height: 720,
                    facingMode: 'user'
                }
            });
            
            this.videoElement.srcObject = stream;
            
            await new Promise((resolve) => {
                this.videoElement.onloadedmetadata = resolve;
            });
            
            this.camera = new Camera(this.videoElement, {
                onFrame: async () => {
                    await this.hands.send({ image: this.videoElement });
                },
                width: 1280,
                height: 720
            });
            
            await this.camera.start();
            
            return true;
        } catch (error) {
            console.error('Failed to initialize gesture detector:', error);
            throw error;
        }
    }
    
    processResults(results) {
        const processed = {
            leftHand: null,
            rightHand: null,
            leftGesture: null,
            rightGesture: null
        };
        
        if (results.multiHandLandmarks && results.multiHandedness) {
            for (let i = 0; i < results.multiHandLandmarks.length; i++) {
                const landmarks = results.multiHandLandmarks[i];
                const handedness = results.multiHandedness[i].label;
                
                // Apply smoothing
                const smoothed = this.smoothLandmarks(landmarks, handedness);
                
                // Calculate velocity
                const velocity = this.calculateVelocity(smoothed, handedness);
                
                // Detect gesture
                const gesture = this.detectGesture(smoothed, velocity, handedness);
                
                if (handedness === 'Left') {
                    processed.leftHand = smoothed;
                    processed.leftGesture = gesture;
                } else {
                    processed.rightHand = smoothed;
                    processed.rightGesture = gesture;
                }
            }
        }
        
        if (this.onResultsCallback) {
            this.onResultsCallback(processed);
        }
    }
    
    smoothLandmarks(landmarks, handedness) {
        const hand = handedness === 'Left' ? 'left' : 'right';
        
        if (!this.smoothedLandmarks[hand]) {
            this.smoothedLandmarks[hand] = landmarks.map(l => ({ ...l }));
            return this.smoothedLandmarks[hand];
        }
        
        const smoothed = landmarks.map((landmark, i) => {
            const prev = this.smoothedLandmarks[hand][i];
            return {
                x: prev.x + this.smoothFactor * (landmark.x - prev.x),
                y: prev.y + this.smoothFactor * (landmark.y - prev.y),
                z: prev.z + this.smoothFactor * (landmark.z - prev.z)
            };
        });
        
        this.smoothedLandmarks[hand] = smoothed;
        return smoothed;
    }
    
    calculateVelocity(landmarks, handedness) {
        const hand = handedness === 'Left' ? 'left' : 'right';
        const wrist = landmarks[0];
        const now = Date.now();
        
        if (!this.previousPositions[hand]) {
            this.previousPositions[hand] = { ...wrist, time: now };
            return { x: 0, y: 0, z: 0, magnitude: 0 };
        }
        
        const prev = this.previousPositions[hand];
        const dt = (now - prev.time) / 1000;
        
        if (dt === 0 || dt > 0.1) {
            this.previousPositions[hand] = { ...wrist, time: now };
            return this.smoothedVelocities[hand];
        }
        
        const vx = (wrist.x - prev.x) / dt;
        const vy = (wrist.y - prev.y) / dt;
        const vz = (wrist.z - prev.z) / dt;
        const magnitude = Math.sqrt(vx * vx + vy * vy + vz * vz);
        
        // Smooth velocity
        const prevVel = this.smoothedVelocities[hand];
        this.smoothedVelocities[hand] = {
            x: prevVel.x + this.velocitySmoothing * (vx - prevVel.x),
            y: prevVel.y + this.velocitySmoothing * (vy - prevVel.y),
            z: prevVel.z + this.velocitySmoothing * (vz - prevVel.z),
            magnitude: prevVel.magnitude + this.velocitySmoothing * (magnitude - prevVel.magnitude)
        };
        
        this.previousPositions[hand] = { ...wrist, time: now };
        
        return this.smoothedVelocities[hand];
    }
    
    detectGesture(landmarks, velocity, handedness) {
        const hand = handedness === 'Left' ? 'left' : 'right';
        const now = Date.now();
        
        const thumbTip = landmarks[4];
        const indexTip = landmarks[8];
        const middleTip = landmarks[12];
        const ringTip = landmarks[16];
        const pinkyTip = landmarks[20];
        const wrist = landmarks[0];
        const indexBase = landmarks[5];
        
        // Pinch detection
        const pinchDist = this.distance3D(thumbTip, indexTip);
        const pinchConfidence = Math.max(0, Math.min(1, 1 - (pinchDist / 0.08)));
        
        // Fist detection
        const fistScore = (
            this.distance3D(indexTip, wrist) +
            this.distance3D(middleTip, wrist) +
            this.distance3D(ringTip, wrist) +
            this.distance3D(pinkyTip, wrist)
        ) / 4;
        const fistConfidence = Math.max(0, Math.min(1, 1 - (fistScore / 0.2)));
        
        // Open palm detection
        const indexExtended = this.distance3D(indexTip, indexBase) > 0.15;
        const middleExtended = this.distance3D(middleTip, landmarks[9]) > 0.15;
        const ringExtended = this.distance3D(ringTip, landmarks[13]) > 0.15;
        const pinkyExtended = this.distance3D(pinkyTip, landmarks[17]) > 0.15;
        
        const openPalmConfidence = (
            (indexExtended ? 0.25 : 0) +
            (middleExtended ? 0.25 : 0) +
            (ringExtended ? 0.25 : 0) +
            (pinkyExtended ? 0.25 : 0)
        );
        
        // Determine gesture
        let detectedGesture = 'unknown';
        let confidence = 0;
        
        if (pinchConfidence > this.confidenceThreshold.pinch && pinchConfidence > fistConfidence) {
            detectedGesture = 'pinch';
            confidence = pinchConfidence;
        } else if (fistConfidence > this.confidenceThreshold.fist && fistConfidence > openPalmConfidence) {
            detectedGesture = 'fist';
            confidence = fistConfidence;
        } else if (openPalmConfidence > this.confidenceThreshold.openPalm) {
            detectedGesture = 'openPalm';
            confidence = openPalmConfidence;
        }
        
        // Debounce
        const currentGesture = this.gestureState[hand].type;
        if (detectedGesture !== currentGesture) {
            if (now - this.lastGestureChange[hand] > this.gestureDebounceTime) {
                this.gestureState[hand] = {
                    type: detectedGesture,
                    confidence: confidence,
                    timestamp: now
                };
                this.lastGestureChange[hand] = now;
            }
        } else {
            this.gestureState[hand].confidence = confidence;
        }
        
        return {
            type: this.gestureState[hand].type,
            confidence: this.gestureState[hand].confidence,
            velocity: velocity,
            landmarks: landmarks
        };
    }
    
    distance3D(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dz = p1.z - p2.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    
    onResults(callback) {
        this.onResultsCallback = callback;
    }
}