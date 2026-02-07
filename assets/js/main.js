/**
 * Main JavaScript file for Mohammed Haneef's Personal Website
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initMobileNav();
    initScrollEffects();
    initPortfolioFilter();
    initContactForm();
    initFadeAnimations();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');

        // Toggle aria-expanded for accessibility
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);

        // Lock body scroll when menu is open
        document.body.classList.toggle('nav-open', isExpanded);
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
}

/**
 * Scroll Effects - Navbar background and active section
 */
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    // Add/remove background on scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
}

/**
 * Portfolio Filter
 */
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length === 0 || portfolioItems.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter items
            const filter = button.dataset.filter;

            portfolioItems.forEach(item => {
                const category = item.dataset.category;

                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Contact Form Handling
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Simulate form submission (replace with actual form handling)
        // If using Formspree or similar, the form action will handle this

        try {
            // Check if form has an action URL (like Formspree)
            if (form.action && form.action !== '#' && !form.action.endsWith(window.location.pathname)) {
                // Let the form submit naturally to the service
                form.submit();
                return;
            }

            // Simulated success for demo purposes
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success message
            showFormStatus('success', 'Thank you for your message! I\'ll get back to you soon.');
            form.reset();
        } catch (error) {
            // Show error message
            showFormStatus('error', 'Oops! Something went wrong. Please try again later.');
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });

    function showFormStatus(type, message) {
        if (!formStatus) return;

        formStatus.className = 'form-status ' + type;
        formStatus.textContent = message;

        // Hide after 5 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 5000);
    }
}

/**
 * Fade-in Animations on Scroll
 */
function initFadeAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(
        '.intro-card, .featured-card, .service-card-large, .blog-card, .portfolio-item, .timeline-item'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href === '#') return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Copyright Year Auto-Update
 */
document.querySelectorAll('.footer-bottom p').forEach(el => {
    const currentYear = new Date().getFullYear();
    el.innerHTML = el.innerHTML.replace(/\d{4}/, currentYear);
});
