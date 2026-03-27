// Simple Intersection Observer to fade in timeline events as they scroll into view
document.addEventListener("DOMContentLoaded", () => {
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
