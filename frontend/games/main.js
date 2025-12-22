// Fixed: Improved error handling, proper async initialization, corrected fade-in timing
class AnonyTalkApp {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.gestureDetector = null;
        this.games = [];
        this.currentGameIndex = 0;
        this.animationFrameId = null;
        this.isInitialized = false;
    }
    
    async initialize() {
        try {
            this.initThreeJS();
            
            this.gestureDetector = new GestureDetector();
            await this.gestureDetector.initialize();
            
            this.initGames();
            
            this.gestureDetector.onResults((data) => {
                this.handleGestureResults(data);
            });
            
            this.setupUI();
            
            this.animate();
            
            this.hideLoadingScreen();
            
            this.isInitialized = true;
            
            this.switchGame(0);
            
        } catch (error) {
            console.error('Initialization error:', error);
            this.showError('Failed to initialize. Please allow camera access and refresh the page.');
        }
    }
    
    initThreeJS() {
        const canvas = document.getElementById('three-canvas');
        
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0f);
        
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;
        
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);
        
        window.addEventListener('resize', () => this.onWindowResize(), false);
    }
    
    initGames() {
        this.games = [
            new ParticleFlowGame(this.scene, this.camera),
            new ParticleBurstGame(this.scene, this.camera),
            new ParticleOrbitGame(this.scene, this.camera),
            new ParticleMorphGame(this.scene, this.camera),
            new ParticleDissolveGame(this.scene, this.camera),
            new ParticleBreatheGame(this.scene, this.camera),
            new ParticlePortalGame(this.scene, this.camera),
            new ParticleSnowGame(this.scene, this.camera)
        ];
    }
    
    setupUI() {
        const buttons = document.querySelectorAll('.gesture-btn');
        
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.switchGame(index);
            });
        });
    }
    
    switchGame(index) {
        if (index < 0 || index >= this.games.length) return;
        
        if (this.games[this.currentGameIndex]) {
            this.games[this.currentGameIndex].deactivate();
        }
        
        this.currentGameIndex = index;
        
        this.games[this.currentGameIndex].activate();
        
        this.updateUI();
    }
    
    updateUI() {
        const buttons = document.querySelectorAll('.gesture-btn');
        buttons.forEach((btn, idx) => {
            if (idx === this.currentGameIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        const titles = [
            'Particle Flow',
            'Particle Burst',
            'Particle Orbit',
            'Shape Morph',
            'Particle Dissolve',
            'Breathing Field',
            'Portal Conjuring',
            'Ambient Snow'
        ];
        
        const titleElement = document.getElementById('exp-title');
        if (titleElement) {
            titleElement.textContent = titles[this.currentGameIndex];
        }
        
        const currentGame = this.games[this.currentGameIndex];
        const hintElement = document.getElementById('gesture-hint');
        if (hintElement && currentGame && currentGame.getHint) {
            hintElement.textContent = currentGame.getHint();
            hintElement.classList.add('visible');
            
            setTimeout(() => {
                hintElement.classList.remove('visible');
            }, 5000);
        }
    }
    
    handleGestureResults(data) {
        if (!this.isInitialized) return;
        
        const currentGame = this.games[this.currentGameIndex];
        if (currentGame && currentGame.active) {
            currentGame.update(data);
        }
    }
    
    animate() {
        this.animationFrameId = requestAnimationFrame(() => this.animate());
        
        this.renderer.render(this.scene, this.camera);
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const app = document.getElementById('app');
        
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 600);
        }
        
        if (app) {
            app.style.display = 'block';
            requestAnimationFrame(() => {
                app.classList.add('fade-in');
            });
        }
    }
    
    showError(message) {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            const content = loadingScreen.querySelector('.loader-content p');
            if (content) {
                content.textContent = message;
                content.style.color = '#ef4444';
            }
            
            const spinner = loadingScreen.querySelector('.loader-spinner');
            if (spinner) {
                spinner.style.display = 'none';
            }
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function initApp() {
    const app = new AnonyTalkApp();
    app.initialize().catch(error => {
        console.error('Failed to initialize app:', error);
    });
}