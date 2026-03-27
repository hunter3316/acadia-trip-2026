// Simple Intersection Observer to fade in timeline events as they scroll into view
document.addEventListener("DOMContentLoaded", () => {
    // Passcode Logic
    const CORRECT_CODE = "2026";
    const overlay = document.getElementById('passcode-overlay');
    const input = document.getElementById('passcode-input');
    const errorMsg = document.getElementById('passcode-error');
    const body = document.body;

    // Check if previously unlocked (session based)
    if (sessionStorage.getItem('itinerary_unlocked') === 'true') {
        unlockSite();
    }

    input.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val.length === 4) {
            if (val === CORRECT_CODE) {
                unlockSite();
                sessionStorage.setItem('itinerary_unlocked', 'true');
            } else {
                // Wrong code: Shake effect
                input.classList.add('shake');
                errorMsg.classList.add('visible');
                setTimeout(() => {
                    input.classList.remove('shake');
                    input.value = '';
                }, 500);
            }
        } else {
            errorMsg.classList.remove('visible');
        }
    });

    function unlockSite() {
        overlay.classList.add('unlocked');
        body.classList.remove('locked');
        // Small delay to allow fade animation to finish before removing from DOM or interaction
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 800);
    }

    const events = document.querySelectorAll('.timeline-event');
    
    // Initially set opacity to 0 and push them down slightly
    events.forEach(event => {
        event.style.opacity = "0";
        event.style.transform = "translateY(50px)";
        event.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // Unobserve once it becomes visible so it stays visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    });

    events.forEach(event => {
        observer.observe(event);
    });
    
    // Smooth scrolling for the scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if(scrollIndicator) {
        scrollIndicator.style.cursor = "pointer";
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});
