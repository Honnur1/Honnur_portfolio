// Responsive nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.site-nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
