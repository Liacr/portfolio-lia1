document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.cabecalho__menu__link');
  const currentPath = window.location.pathname;

  menuLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (currentPath.includes(linkPath)) {
      link.classList.add('current');
    } else {
      link.classList.remove('current');
    }
  });
});