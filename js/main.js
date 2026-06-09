document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    }

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        }
    });

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Video Play Logic for "Como Chegar"
    const videoContainer = document.getElementById('location-video-container');
    const locationVideo = document.getElementById('location-video');
    const playVideoBtn = document.getElementById('play-video-btn');
    const videoCaption = document.getElementById('video-caption-text');

    if (videoContainer && locationVideo && playVideoBtn) {
        // Toggle play/pause when clicking the container
        videoContainer.addEventListener('click', () => {
            if (locationVideo.paused) {
                locationVideo.play();
                locationVideo.muted = false; // Ensure sound is on
                playVideoBtn.style.opacity = '0';
                if(videoCaption) videoCaption.style.opacity = '0';
                locationVideo.setAttribute('controls', 'true'); // Add controls once playing
            } else {
                locationVideo.pause();
                playVideoBtn.style.opacity = '1';
                if(videoCaption) videoCaption.style.opacity = '1';
            }
        });

        // Update UI when video ends
        locationVideo.addEventListener('ended', () => {
            playVideoBtn.style.opacity = '1';
            if(videoCaption) videoCaption.style.opacity = '1';
            locationVideo.removeAttribute('controls');
            locationVideo.load(); // Reset video
        });
    }
});
