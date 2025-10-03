// Countdown Timer with Fixed Start and End Time
function startTimer() {
    const timerElement = {
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    // Set hackathon start and end times (October 3, 2025)
    const hackathonStart = new Date('2025-10-03T09:00:00').getTime();
    const hackathonEnd = new Date('2025-10-03T21:00:00').getTime();
    const totalDuration = hackathonEnd - hackathonStart; // 12 hours in milliseconds

    function updateTimer() {
        const now = new Date().getTime();
        const timeRemaining = hackathonEnd - now;

        // If hackathon hasn't started yet
        if (now < hackathonStart) {
            const timeUntilStart = hackathonStart - now;
            const hours = Math.floor(timeUntilStart / (1000 * 60 * 60));
            const minutes = Math.floor((timeUntilStart % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeUntilStart % (1000 * 60)) / 1000);

            timerElement.hours.textContent = String(hours).padStart(2, '0');
            timerElement.minutes.textContent = String(minutes).padStart(2, '0');
            timerElement.seconds.textContent = String(seconds).padStart(2, '0');
            
            // Update label to show "Starts In"
            const timerLabels = document.querySelectorAll('.timer .label');
            if (timerLabels.length > 0) {
                document.querySelector('.timer-label').textContent = 'STARTS IN';
            }
            return;
        }

        // If hackathon has ended
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showHackathonEndMessage();
            return;
        }

        // Calculate remaining time
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timerElement.hours.textContent = String(hours).padStart(2, '0');
        timerElement.minutes.textContent = String(minutes).padStart(2, '0');
        timerElement.seconds.textContent = String(seconds).padStart(2, '0');

        // Update progress bar
        const progress = ((totalDuration - timeRemaining) / totalDuration) * 100;
        const progressBar = document.getElementById('timerProgress');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

function showHackathonEndMessage() {
    const timer = document.querySelector('.timer');
    const timerLabel = document.querySelector('.timer-label');
    
    timerLabel.textContent = 'HACKATHON ENDED';
    timer.innerHTML = '<div class="time-block" style="min-width: 100%; text-align: center;"><span class="time" style="font-size: 3rem;">🎉</span><span class="label" style="font-size: 1.2rem; margin-top: 1rem;">Great Job! Time\'s Up!</span></div>';
    
    // Optional: Add confetti effect or celebration animation
    document.body.style.animation = 'celebration 2s ease-in-out';
}
