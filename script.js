// Enhanced Timer Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Fixed hackathon schedule
    const hackathonDate = '2025-10-03'; // October 3, 2025
    const startTime = `${hackathonDate}T09:00:00`; // 9:00 AM
    const endTime = `${hackathonDate}T21:00:00`;   // 9:00 PM (12 hours)
    
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    const totalDuration = 12 * 60 * 60; // 12 hours in seconds

    function updateTimer() {
        const now = new Date();
        const currentTime = now.getTime();
        const startTimeMs = startDate.getTime();
        const endTimeMs = endDate.getTime();

        // Before 9:00 AM - Show 12:00:00 (waiting to start)
        if (currentTime < startTimeMs) {
            document.getElementById('hours').textContent = '12';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            document.querySelector('.timer-label').textContent = 'STARTS AT 9:00 AM';
            
            // Set progress bar to 0%
            const progressBar = document.getElementById('timerProgress');
            if (progressBar) {
                progressBar.style.width = '0%';
            }
            return;
        }

        // After 9:00 PM - Show 00:00:00 (ended)
        if (currentTime > endTimeMs) {
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            document.querySelector('.timer-label').textContent = 'HACKATHON ENDED';
            
            // Set progress bar to 100%
            const progressBar = document.getElementById('timerProgress');
            if (progressBar) {
                progressBar.style.width = '100%';
            }
            return;
        }

        // Between 9:00 AM and 9:00 PM - Count down
        const timeRemaining = Math.floor((endTimeMs - currentTime) / 1000);
        
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;

        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        document.querySelector('.timer-label').textContent = 'TIME REMAINING';

        // Update progress bar
        const elapsed = totalDuration - timeRemaining;
        const progressPercent = (elapsed / totalDuration) * 100;
        const progressBar = document.getElementById('timerProgress');
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
        }
    }

    // Update timer immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
});

// Custom Cursor
const cursor = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursor && cursorOutline) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
    });
}

// Particle Generation
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 20;
        const randomDuration = 15 + Math.random() * 10;
        const randomDrift = (Math.random() - 0.5) * 2;
        
        particle.style.left = randomX + 'px';
        particle.style.bottom = '-10px';
        particle.style.setProperty('--drift', randomDrift);
        particle.style.animation = `floatUp ${randomDuration}s ${randomDelay}s linear infinite`;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Expand/Collapse Problem Cards
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.problem-card');
        card.classList.toggle('collapsed');
        
        // Smooth scroll to card when expanding
        if (!card.classList.contains('collapsed')) {
            setTimeout(() => {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
        }
    });
});

// Smooth scroll for navigation (if you add navigation later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
