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

    // ===================== ITINERARY CROSS-LINKS =====================
    document.querySelectorAll('.itinerary-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = link.dataset.goto;
            const targetBtn = document.querySelector(`.tab-btn[data-tab="${targetTab}"]`);
            if (targetBtn) targetBtn.click();
        });
    });

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

    // ===================== RV GALLERY THUMBNAIL SWITCHER =====================
    window.setRvMain = function(thumb) {
        const mainImg = document.getElementById('rv-main-img');
        const caption = document.getElementById('rv-main-caption');
        if (!mainImg) return;
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = thumb.src;
            mainImg.alt = thumb.alt;
            if (caption) caption.textContent = thumb.dataset.caption || thumb.alt;
            mainImg.style.opacity = '1';
        }, 200);
        document.querySelectorAll('.rv-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
    };

    // ===================== COPY TO CLIPBOARD =====================
    window.copyToClipboard = function(text, btn) {
        navigator.clipboard.writeText(text).then(() => {
            btn.textContent = '✓ Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = 'Copy';
                btn.classList.remove('copied');
            }, 2000);
        }).catch(() => {
            btn.textContent = 'Error';
            setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
        });
    };

    // ===================== TODO CHECKLIST PERSISTENCE =====================
    const STORAGE_KEY = 'acadia-todo-state';

    function loadTodoState() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch { return {}; }
    }

    function saveTodoState(state) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function updateProgress() {
        const allItems = document.querySelectorAll('.todo-item:not(.completed) .todo-check:not(:disabled)');
        const allCheckable = document.querySelectorAll('.todo-check:not(:disabled)');
        const checked = Array.from(allCheckable).filter(cb => cb.checked).length;
        const total = allCheckable.length;
        const fill = document.getElementById('todo-progress-fill');
        const text = document.getElementById('todo-progress-text');
        if (fill) fill.style.width = total ? (checked / total * 100) + '%' : '0%';
        if (text) text.textContent = checked + ' / ' + total + ' completed';
    }

    // Init: restore saved states
    const savedState = loadTodoState();
    document.querySelectorAll('.todo-item[data-id]').forEach(item => {
        const id = item.dataset.id;
        const cb = item.querySelector('.todo-check');
        if (!cb || cb.disabled) return;
        if (savedState[id]) {
            cb.checked = true;
            item.classList.add('completed');
        }
        cb.addEventListener('change', () => {
            const state = loadTodoState();
            state[id] = cb.checked;
            saveTodoState(state);
            item.classList.toggle('completed', cb.checked);
            updateProgress();
        });
    });
    updateProgress();

    // ===================== COUNTDOWN TIMER =====================
    function updateCountdown() {
        const tripStart = new Date('2026-06-06T16:00:00-04:00'); // RV pickup time EDT
        const now = new Date();
        const diff = tripStart - now;
        const el = document.getElementById('trip-countdown');
        if (!el) return;

        if (diff <= 0) {
            el.innerHTML = '<span class="countdown-label">🎉 The adventure has begun!</span>';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        el.innerHTML = `
            <div class="countdown-blocks">
                <div class="countdown-block">
                    <span class="countdown-num">${days}</span>
                    <span class="countdown-unit">days</span>
                </div>
                <div class="countdown-block">
                    <span class="countdown-num">${hours}</span>
                    <span class="countdown-unit">hours</span>
                </div>
                <div class="countdown-block">
                    <span class="countdown-num">${minutes}</span>
                    <span class="countdown-unit">min</span>
                </div>
            </div>
            <span class="countdown-label">until RV pickup!</span>
        `;
    }
    updateCountdown();
    setInterval(updateCountdown, 60000);

});
