// ========================================
// MOTIVATION.JS
// Anony Talk - Motivation Page
// Interactive Features & Animations
// ========================================

(function() {
    'use strict';

    // ==========================================
    // INITIALIZATION
    // ==========================================
    
    document.addEventListener('DOMContentLoaded', initializeMotivationPage);

    function initializeMotivationPage() {
        console.log('%cAnony Talk - Motivation Page', 'color: #8b5cf6; font-size: 18px; font-weight: bold;');
        console.log('%c✨ You\'re doing great. Keep going. 💙', 'color: #14b8a6; font-size: 14px;');
        
        // Initialize all features
        initScrollReveal();
        initParallaxEffect();
        initOrbInteraction();
        initSmoothScrolling();
        initLazyLoading();
        initCardEnhancements();
    }

    // ==========================================
    // SCROLL REVEAL ANIMATION
    // ==========================================
    
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // Select all elements to animate
        const animatedElements = document.querySelectorAll(
            '.story-card, .quote-card, .media-card, .section-header'
        );

        animatedElements.forEach((element, index) => {
            // Set initial hidden state
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            // Stagger animation delays
            const delay = index * 0.08;
            element.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
            
            // Observe element
            observer.observe(element);
        });

        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    // Unobserve after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }
    }

    // ==========================================
    // PARALLAX HERO EFFECT
    // ==========================================
    
    function initParallaxEffect() {
        const heroSection = document.querySelector('.hero-section');
        
        if (!heroSection) return;

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleParallaxScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        function handleParallaxScroll() {
            const scrollPosition = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;
            
            // Only apply effect when hero is in view
            if (scrollPosition < heroHeight) {
                const translateY = scrollPosition * 0.4;
                const opacity = Math.max(1 - (scrollPosition / 600), 0);
                
                heroSection.style.transform = `translateY(${translateY}px)`;
                heroSection.style.opacity = opacity;
            }
        }
    }

    // ==========================================
    // INTERACTIVE GRADIENT ORBS
    // ==========================================
    
    function initOrbInteraction() {
        const orbs = document.querySelectorAll('.gradient-orb');
        
        if (orbs.length === 0) return;

        let mouseX = 0;
        let mouseY = 0;
        let isMoving = false;

        document.addEventListener('mousemove', handleMouseMove);

        function handleMouseMove(e) {
            if (!isMoving) {
                isMoving = true;
                window.requestAnimationFrame(updateOrbPositions);
            }
            
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
        }

        function updateOrbPositions() {
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 15;
                const offsetX = (mouseX - 0.5) * speed;
                const offsetY = (mouseY - 0.5) * speed;
                
                orb.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
            
            isMoving = false;
        }
    }

    // ==========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ==========================================
    
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });

        function handleAnchorClick(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }

    // ==========================================
    // LAZY LOADING FOR IFRAMES
    // ==========================================
    
    function initLazyLoading() {
        const iframes = document.querySelectorAll('iframe[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const iframeObserver = new IntersectionObserver(handleIframeIntersection, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            iframes.forEach(iframe => {
                // Set initial state
                iframe.style.opacity = '0';
                iframe.style.transition = 'opacity 0.5s ease';
                
                iframeObserver.observe(iframe);
            });

            function handleIframeIntersection(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const iframe = entry.target;
                        
                        // Fade in the iframe
                        setTimeout(() => {
                            iframe.style.opacity = '1';
                        }, 100);
                        
                        // Stop observing
                        iframeObserver.unobserve(iframe);
                    }
                });
            }
        } else {
            // Fallback for browsers without IntersectionObserver
            iframes.forEach(iframe => {
                iframe.style.opacity = '1';
            });
        }
    }

    // ==========================================
    // CARD INTERACTION ENHANCEMENTS
    // ==========================================
    
    function initCardEnhancements() {
        // Story cards
        const storyCards = document.querySelectorAll('.story-card');
        storyCards.forEach(card => {
            card.addEventListener('mouseenter', () => handleCardHover(card));
            card.addEventListener('mouseleave', () => handleCardLeave(card));
        });

        // Quote cards
        const quoteCards = document.querySelectorAll('.quote-card');
        quoteCards.forEach(card => {
            card.addEventListener('mouseenter', () => handleCardHover(card));
        });

        function handleCardHover(card) {
            // Add subtle scale effect
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        }

        function handleCardLeave(card) {
            card.style.transition = '';
        }
    }

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    
    // Debounce function for performance optimization
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for performance optimization
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ==========================================
    // PERFORMANCE MONITORING (DEV ONLY)
    // ==========================================
    
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Monitor page load performance
        window.addEventListener('load', () => {
            if (window.performance && window.performance.timing) {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                console.log('%cPage Load Performance', 'color: #14b8a6; font-weight: bold;');
                console.log(`Total load time: ${pageLoadTime}ms`);
                console.log(`DOM ready: ${perfData.domContentLoadedEventEnd - perfData.navigationStart}ms`);
            }
        });
    }

    // ==========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ==========================================
    
    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Add keyboard focus indicators
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });

    // ==========================================
    // REDUCED MOTION PREFERENCE
    // ==========================================
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.body.classList.add('reduce-motion');
        console.log('Reduced motion mode enabled');
    }

    // ==========================================
    // THEME DETECTION (FOR FUTURE ENHANCEMENT)
    // ==========================================
    
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Currently always dark, but ready for theme switching
    if (prefersDarkMode.matches) {
        document.body.classList.add('dark-mode');
    }

    // ==========================================
    // ERROR HANDLING
    // ==========================================
    
    window.addEventListener('error', (e) => {
        console.error('An error occurred:', e.message);
        // In production, you might want to send this to an error tracking service
    });

    // ==========================================
    // EXPORT FOR MODULE USAGE (OPTIONAL)
    // ==========================================
    
    window.AnonyTalkMotivation = {
        version: '1.0.0',
        init: initializeMotivationPage
    };

})();