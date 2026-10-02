/**
 * PORTFOLIO INTERACTIVE LOGIC
 * Candidate: Sai Varsha | Role: Data Analyst
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set Dynamic Current Year in Footer
    const currentYearElem = document.getElementById('currentYear');
    if (currentYearElem) {
        currentYearElem.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile nav when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 3. Scroll Progress Bar & Back to Top Button
    const scrollProgress = document.getElementById('scrollProgress');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.scrollY / totalHeight) * 100;

        if (scrollProgress) {
            scrollProgress.style.width = `${currentProgress}%`;
        }

        if (backToTopBtn) {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Active Navigation Anchor Highlight
    const sections = document.querySelectorAll('section[id]');

    const highlightActiveNav = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            const navMatch = document.querySelector(`.nav-list a[href*="#${sectionId}"]`);
            if (navMatch) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navMatch.classList.add('active');
                } else {
                    navMatch.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', highlightActiveNav);
});