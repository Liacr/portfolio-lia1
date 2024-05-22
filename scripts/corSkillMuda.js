const skillItems = document.querySelectorAll('.skill__item');

skillItems.forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    const img = item.querySelector('.skill__imagem');
    const src = img.getAttribute('src');
    const srcOn = src.replace('Off', 'On');
    img.setAttribute('src', srcOn);
  });

  item.addEventListener('mouseleave', function() {
    const img = item.querySelector('.skill__imagem');
    const src = img.getAttribute('src');
    const srcOff = src.replace('On', 'Off');
    img.setAttribute('src', srcOff);
  });
});
