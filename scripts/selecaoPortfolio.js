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
  // Atualiza as animações do AOS para os novos elementos visíveis
  AOS.refresh();
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
  // Atualiza as animações do AOS para os novos elementos visíveis
  AOS.refresh();
}

// Função para trocar o projeto
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
  // Atualiza as animações do AOS para os novos elementos visíveis
  AOS.refresh();
}

// Função para atualizar a visibilidade dos projetos
function atualizarVisibilidadeProjeto(projetos) {
  projetos.forEach((projeto, index) => {
    const isVisible = index === currentProjetoIndex;
    projeto.classList.toggle('hidden', !isVisible);
    if (isVisible) {
      reanimarElemento(projeto);
    }
  });
}

// Função para atualizar a visibilidade dos textos
function atualizarVisibilidadeTexto(textos) {
  textos.forEach((texto, index) => {
    const isVisible = index === currentProjetoIndex;
    texto.classList.toggle('hidden', !isVisible);
    if (isVisible) {
      reanimarElemento(texto);
    }
  });
}

function reanimarElemento(elemento) {
  elemento.classList.remove('aos-animate'); // Remove a classe de animação
  setTimeout(() => {
    elemento.classList.add('aos-animate'); // Adiciona novamente a classe de animação
  }, 50); // Tempo suficiente para reanimação
}

mostrarFrontEnd();

botaoFrontEnd.addEventListener('click', mostrarFrontEnd);
botaoUxUi.addEventListener('click', mostrarUxUi);
setaNext.addEventListener('click', trocarProjeto);