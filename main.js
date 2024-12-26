// Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close Navbar on Scroll
window.addEventListener('scroll', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Scroll Reveal Animations
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.form-container', { delay: 800, origin: 'top', distance: '0px', opacity: 0 });
sr.reveal('.heading', { delay: 800, origin: 'top' });
sr.reveal('.ride-container .box', { delay: 600, origin: 'top' });
sr.reveal('.service-container .box', { delay: 600, origin: 'top' });
sr.reveal('.about-container', { delay: 600, origin: 'top' });
sr.reveal('.reviews-container', { delay: 600, origin: 'top' });

// Interactive Form
const form = document.querySelector('.form-container form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted successfully!');
    alert('Votre réservation a été soumise avec succès !');
});

// Responsive Image Adjustments
window.addEventListener('resize', () => {
    const images = document.querySelectorAll('.app-stores img');
    if (window.innerWidth < 768) {
        images.forEach(img => img.style.width = '90px');
    } else {
        images.forEach(img => img.style.width = '120px');
    }
});
