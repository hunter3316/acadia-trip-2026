document.addEventListener("DOMContentLoaded", () => {

    // ===================== PASSCODE =====================
    const CORRECT_CODE = "3316";
    const overlay = document.getElementById('passcode-overlay');
    const input = document.getElementById('passcode-input');
    const errorMsg = document.getElementById('passcode-error');

    if (sessionStorage.getItem('itinerary_unlocked') === 'true') {
        unlockSite();
    }

    if (input) {
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            if (val.length === 4) {
                if (val === CORRECT_CODE) {
                    unlockSite();
                    sessionStorage.setItem('itinerary_unlocked', 'true');
                } else {
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
    }

    function unlockSite() {
        overlay.classList.add('unlocked');
        document.body.classList.remove('locked');
        setTimeout(() => { overlay.style.display = 'none'; }, 800);
    }

    // ===================== TAB SWITCHING =====================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const tabNav = document.getElementById('tab-nav');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const panel = document.getElementById('tab-' + target);
            if (panel) panel.classList.add('active');

            // Scroll to top of tab nav
            tabNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ===================== SCROLL INDICATOR =====================
    const scrollIndicator = document.getElementById('scroll-down');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            tabNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // ===================== STICKY NAV SHADOW =====================
    window.addEventListener('scroll', () => {
        if (tabNav) {
            tabNav.style.boxShadow = window.scrollY > 80
                ? '0 4px 30px rgba(0,0,0,0.5)'
                : 'none';
        }
    });

    // ===================== TIMELINE SCROLL ANIMATION =====================
    const timelineEvents = document.querySelectorAll('.timeline-event');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    timelineEvents.forEach(ev => observer.observe(ev));

    // ===================== GALLERY LIGHTBOX (SIMPLE) =====================
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const caption = item.querySelector('.gallery-caption');
            if (!img) return;

            const lightbox = document.createElement('div');
            lightbox.style.cssText = `
                position:fixed;inset:0;z-index:10000;
                background:rgba(0,0,0,0.92);
                display:flex;flex-direction:column;
                justify-content:center;align-items:center;
                cursor:zoom-out;
                animation:fadeIn 0.3s ease;
                padding:20px;
            `;

            const lbImg = document.createElement('img');
            lbImg.src = img.src;
            lbImg.style.cssText = `
                max-width:90vw;max-height:80vh;
                border-radius:12px;
                object-fit:contain;
                box-shadow:0 30px 80px rgba(0,0,0,0.8);
            `;

            const lbCaption = document.createElement('p');
            lbCaption.textContent = caption ? caption.textContent : '';
            lbCaption.style.cssText = `
                color:rgba(255,255,255,0.7);
                margin-top:16px;
                font-size:0.95rem;
                font-family:'Outfit',sans-serif;
                text-align:center;
            `;

            lightbox.appendChild(lbImg);
            lightbox.appendChild(lbCaption);
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', () => lightbox.remove());
        });
    });

});
