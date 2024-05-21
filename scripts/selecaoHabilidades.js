const botaoFrontEnd = document.querySelector('.botao-front-end');
const botaoUxUi = document.querySelector('.botao-ux-ui');
const textoFrontEnd = document.querySelector('.apresentacao__conteudo__texto');
const textoUxUi = document.querySelector('.apresentacao__conteudo__texto__extra');
const imagemSkillFrontEnd = document.querySelector('.apresentacao__imagem__skill');
const imagemSkillUxUi = document.querySelector('.apresentacao__imagem__extra');

function mostrarFrontEnd() {
  botaoFrontEnd.disabled = true;
  botaoUxUi.disabled = false;
  
  textoFrontEnd.classList.remove('hidden');
  textoUxUi.classList.add('hidden');
  imagemSkillFrontEnd.classList.remove('hidden');
  imagemSkillUxUi.classList.add('hidden');
}

function mostrarUxUi() {
  botaoFrontEnd.disabled = false;
  botaoUxUi.disabled = true;
  
  textoFrontEnd.classList.add('hidden');
  textoUxUi.classList.remove('hidden');
  imagemSkillFrontEnd.classList.add('hidden');
  imagemSkillUxUi.classList.remove('hidden');
}

mostrarFrontEnd();

botaoFrontEnd.addEventListener('click', mostrarFrontEnd);
botaoUxUi.addEventListener('click', mostrarUxUi);