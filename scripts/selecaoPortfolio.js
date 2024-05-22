const botaoFrontEnd = document.querySelector('.botao-front-end');
const botaoUxUi = document.querySelector('.botao-ux-ui');
const textosFrontEnd = document.querySelectorAll('.apresentacao__conteudo__texto.front-end');
const textosUxUi = document.querySelectorAll('.apresentacao__conteudo__texto__extra.ux-ui');
const projetosFrontEnd = document.querySelectorAll('.projeto-link.front-end');
const projetosUxUi = document.querySelectorAll('.projeto-link.ux-ui');
const setaNext = document.querySelector('.next-seta');

let currentProjetoIndex = 0;
let currentCategory = 'front-end';

function mostrarFrontEnd() {
  currentCategory = 'front-end';
  currentProjetoIndex = 0;
  botaoFrontEnd.disabled = true;
  botaoUxUi.disabled = false;

  atualizarVisibilidadeTexto(textosFrontEnd);
  atualizarVisibilidadeProjeto(projetosFrontEnd);
  textosUxUi.forEach(texto => texto.classList.add('hidden'));
  projetosUxUi.forEach(projeto => projeto.classList.add('hidden'));
}

function mostrarUxUi() {
  currentCategory = 'ux-ui';
  currentProjetoIndex = 0;
  botaoFrontEnd.disabled = false;
  botaoUxUi.disabled = true;

  atualizarVisibilidadeTexto(textosUxUi);
  atualizarVisibilidadeProjeto(projetosUxUi);
  textosFrontEnd.forEach(texto => texto.classList.add('hidden'));
  projetosFrontEnd.forEach(projeto => projeto.classList.add('hidden'));
}

// Função para trocar a imagem do projeto
function trocarProjeto() {
  if (currentCategory === 'front-end') {
    currentProjetoIndex = (currentProjetoIndex + 1) % projetosFrontEnd.length;
    atualizarVisibilidadeProjeto(projetosFrontEnd);
    atualizarVisibilidadeTexto(textosFrontEnd);
  } else {
    currentProjetoIndex = (currentProjetoIndex + 1) % projetosUxUi.length;
    atualizarVisibilidadeProjeto(projetosUxUi);
    atualizarVisibilidadeTexto(textosUxUi);
  }
}

// Função para atualizar a visibilidade dos projetos
function atualizarVisibilidadeProjeto(projetos) {
  projetos.forEach((projeto, index) => {
    projeto.classList.toggle('hidden', index !== currentProjetoIndex);
  });
}

// Função para atualizar a visibilidade dos textos
function atualizarVisibilidadeTexto(textos) {
  textos.forEach((texto, index) => {
    texto.classList.toggle('hidden', index !== currentProjetoIndex);
  });
}

mostrarFrontEnd();

botaoFrontEnd.addEventListener('click', mostrarFrontEnd);
botaoUxUi.addEventListener('click', mostrarUxUi);

setaNext.addEventListener('click', trocarProjeto);