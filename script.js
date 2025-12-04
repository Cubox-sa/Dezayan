// ============================================
// DEZAYAN LANDING PAGE - JAVASCRIPT
// Countdown Timer & Interactive Features
// ============================================

// Initialize Countdown Timer
function initCountdown() {
    // Set countdown end time (7 days from now)
    const endTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = endTime - now;

        if (timeRemaining < 0) {
            // Countdown finished
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        // Calculate time units
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update DOM
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Smooth scroll for CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        // You can add your own action here (e.g., redirect to checkout, show modal, etc.)
        console.log('CTA Button Clicked');
        // Example: window.location.href = 'https://checkout.example.com';
    });
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        
        // Toggle answer visibility
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            this.style.color = '#ff6666';
        } else {
            answer.style.display = 'none';
            this.style.color = '#ff0000';
        }
    });
});

// Initialize all FAQ answers as hidden
document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});

// Scarcity counter animation (optional - simulates real-time updates)
function initScarcityCounter() {
    let currentCount = 87;
    const maxCount = 100;

    // Simulate random purchases every 30-60 seconds
    setInterval(() => {
        if (currentCount < maxCount) {
            currentCount += Math.floor(Math.random() * 3) + 1; // Add 1-3 random purchases
            if (currentCount > maxCount) currentCount = maxCount;

            // Update counter display
            document.querySelector('.scarcity-count').textContent = currentCount;

            // Update progress bar
            const percentage = (currentCount / maxCount) * 100;
            document.querySelector('.scarcity-fill').style.width = percentage + '%';

            // Show warning when getting close to max
            if (currentCount >= maxCount) {
                document.querySelector('.scarcity-warning').textContent = 'انتهت جميع المقاعد! سيتم فتح جولة جديدة قريباً.';
                document.querySelector('.scarcity-warning').style.color = '#00ff00';
            }
        }
    }, Math.random() * 30000 + 30000); // Random interval between 30-60 seconds
}

// Sticky urgency bar effect
window.addEventListener('scroll', function() {
    const urgencyBar = document.querySelector('.urgency-bar');
    if (window.scrollY > 100) {
        urgencyBar.style.position = 'fixed';
        urgencyBar.style.top = '0';
        urgencyBar.style.left = '0';
        urgencyBar.style.right = '0';
        urgencyBar.style.width = '100%';
        urgencyBar.style.margin = '0';
        urgencyBar.style.borderRadius = '0';
        urgencyBar.style.zIndex = '1000';
    } else {
        urgencyBar.style.position = 'sticky';
        urgencyBar.style.margin = '10px';
        urgencyBar.style.borderRadius = '8px';
        urgencyBar.style.width = 'auto';
    }
});

// Add scroll animation to sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initScarcityCounter();
    console.log('Dezayan Landing Page initialized successfully!');
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
