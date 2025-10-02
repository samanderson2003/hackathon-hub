// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth cursor dot following
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        
        // Slower cursor outline following
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .tag, .problem-card, .time-block');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'scale(2)';
            cursorOutline.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'scale(1)';
            cursorOutline.style.transform = 'scale(1)';
        });
    });
}

// Particle System
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) {
        console.log('Particles container not found');
        return;
    }
    
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random horizontal position
        const leftPos = Math.random() * 100;
        particle.style.left = leftPos + '%';
        
        // Start from bottom
        particle.style.bottom = '0';
        particle.style.top = 'auto';
        
        // Random drift for horizontal movement
        const drift = (Math.random() - 0.5) * 2; // -1 to 1
        particle.style.setProperty('--drift', drift);
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particle.style.animation = `floatUp ${particle.style.animationDuration} linear ${particle.style.animationDelay} infinite`;
        
        particlesContainer.appendChild(particle);
    }
    
    console.log(`Created ${particleCount} particles from bottom`);
}

// Initialize particles when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createParticles);
} else {
    createParticles();
}

// Toggle Card Expansion
document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.problem-card');
            const wasCollapsed = card.classList.contains('collapsed');
            
            if (wasCollapsed) {
                // Expand the card
                card.classList.remove('collapsed');
                
                // Smooth scroll to show the expanded content
                setTimeout(() => {
                    card.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 300);
            } else {
                // Collapse the card
                card.classList.add('collapsed');
            }
        });
    });
});

// Countdown Timer
function startTimer() {
    const timerElement = {
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    let totalSeconds = 12 * 60 * 60; // 12 hours in seconds

    function updateTimer() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        timerElement.hours.textContent = String(hours).padStart(2, '0');
        timerElement.minutes.textContent = String(minutes).padStart(2, '0');
        timerElement.seconds.textContent = String(seconds).padStart(2, '0');

        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            clearInterval(timerInterval);
            showHackathonEndMessage();
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

function showHackathonEndMessage() {
    const timer = document.querySelector('.timer');
    timer.innerHTML = '<div class="time-block" style="min-width: 100%;"><span class="time">🎉</span><span class="label">Time\'s Up! Great Job!</span></div>';
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Indicator Click
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('.problems-container').scrollIntoView({
        behavior: 'smooth'
    });
});

// Intersection Observer for Cards Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.problem-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add hover effect sound (optional - can be removed)
document.querySelectorAll('.problem-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Dynamic gradient background on scroll
let scrollPos = 0;
window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = 1 - (scrollPos / 1000);
    }
});

// Add click to copy functionality for tech tags
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const text = this.textContent;
        navigator.clipboard.writeText(text).then(() => {
            // Visual feedback
            const originalText = this.textContent;
            this.textContent = '✓ Copied!';
            this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
            }, 1500);
        });
    });
    
    // Add tooltip hint
    tag.title = 'Click to copy';
    tag.style.cursor = 'pointer';
});

// Parallax effect for problem numbers
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.problem-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
        const number = card.querySelector('.problem-number');
        if (number && scrollPercent > 0 && scrollPercent < 1) {
            number.style.transform = `translateY(${scrollPercent * 50}px)`;
        }
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 300, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -300, behavior: 'smooth' });
    }
});

// Add print functionality
function printProblemStatement(problemNumber) {
    const card = document.querySelector(`[data-problem="${problemNumber}"]`);
    if (card) {
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Problem Statement ${problemNumber}</title>
                    <link rel="stylesheet" href="style.css">
                </head>
                <body>
                    ${card.outerHTML}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }
}

// Easter egg: Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startTimer();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('%c🚀 Hackathon Website Loaded!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
    console.log('%cGood luck with your projects! 💪', 'font-size: 14px; color: #10b981;');
});

// Add performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${loadTime.toFixed(2)}ms`);
});
