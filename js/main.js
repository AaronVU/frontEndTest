const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-btn');

hamburgerBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

document.addEventListener('click', (event) => {
  const isClickInsideNav = navMenu.contains(event.target);
  
  if (!isClickInsideNav && navMenu.classList.contains('active')) {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
  }
});