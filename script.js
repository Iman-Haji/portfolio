// Add background color to header on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  }
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');
backToTopButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav ul');
mobileMenu.addEventListener('click', function () {
  nav.classList.toggle('show');
});
