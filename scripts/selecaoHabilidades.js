document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    offset: 90,
    duration: 600,
    easing: 'ease-in-out',
    delay: 100
  });

  const botaoFrontEnd = document.querySelector('.botao-front-end');
  const botaoUxUi = document.querySelector('.botao-ux-ui');
  const textoFrontEnd = document.querySelector('.apresentacao__conteudo__texto');
  const textoUxUi = document.querySelector('.apresentacao__conteudo__texto__extra');
  const imagemSkillFrontEnd = document.querySelector('.apresentacao__imagem__skill');
  const imagemSkillUxUi = document.querySelector('.apresentacao__imagem__extra');

  let currentSkill = 'front-end';

  function mostrarFrontEnd() {
    currentSkill = 'front-end';
    botaoFrontEnd.disabled = true;
    botaoUxUi.disabled = false;

    textoFrontEnd.classList.remove('hidden');
    textoUxUi.classList.add('hidden');
    imagemSkillFrontEnd.classList.remove('hidden');
    imagemSkillUxUi.classList.add('hidden');

    // Reanima elementos
    reanimateElements([textoFrontEnd, imagemSkillFrontEnd]);
    reanimateElementsExtra();
  }

  function mostrarUxUi() {
    currentSkill = 'ux-ui';
    botaoFrontEnd.disabled = false;
    botaoUxUi.disabled = true;

    textoFrontEnd.classList.add('hidden');
    textoUxUi.classList.remove('hidden');
    imagemSkillFrontEnd.classList.add('hidden');
    imagemSkillUxUi.classList.remove('hidden');

    // Reanima elementos
    reanimateElements([textoUxUi, imagemSkillUxUi]);
    reanimateElementsExtra();
  }

  function reanimateElements(elements) {
    elements.forEach(element => {
      element.classList.remove('aos-animate');
      void element.offsetWidth; // recálculo de layout
      element.classList.add('aos-animate');
    });
  }

  function reanimateElementsExtra() {
    const elementosExtra = document.querySelectorAll('.elemento-extra');

    elementosExtra.forEach(elemento => {
      elemento.classList.remove('aos-animate');
      void elemento.offsetWidth; // recálculo de layout
      elemento.classList.add('aos-animate');
    });
  }

  mostrarFrontEnd(); // Inicia com Front-end mostrado

  botaoFrontEnd.addEventListener('click', function () {
    mostrarFrontEnd();
    AOS.refresh();
  });

  botaoUxUi.addEventListener('click', function () {
    mostrarUxUi();
    AOS.refresh();
  });
});