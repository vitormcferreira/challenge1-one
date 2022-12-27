const mapping = [
  ['a', 'ai'],
  ['e', 'enter'],
  ['i', 'imes'],
  ['o', 'ober'],
  ['u', 'ufat'],
];

function criptografar(str) {
  // TODO: DRY
  // O código desta função é muito parecido com a função descriptografar

  let temp = str;
  mapping.forEach(([k, v]) => {
    temp = temp.replaceAll(k, v);
  });
  
  return temp;
}

function descriptografar(str) {
  let temp = str;
  mapping.reverse().forEach(([k, v]) => {
    temp = temp.replaceAll(v, k);
  });

  return temp;
}

const textarea = document.querySelector('textarea');
const criptografarButton = document.querySelector('#criptografar');
const descriptografarButton = document.querySelector('#descriptografar');
const copiarButton = document.querySelector('#copiar');
const semMensagem = document.querySelector('.sem-mensagem');
const mensagem = document.querySelector('.mensagem');
const resultado = document.querySelector('#resultado');

function textAreaVazio() {
  return textarea.value === '';
}

function exibirAvisoDeNenhumaMensagemEncontrada() {
  semMensagem.style.display = 'flex';
  mensagem.style.display = 'none';
}

function inserirMensagem(text) {
  resultado.innerText = text
}

function exibirMensagem() {
  semMensagem.style.display = 'none';
  mensagem.style.display = 'flex';
}

function tentar(criptografarOuDescriptografar) {
  if (textAreaVazio()) {
    exibirAvisoDeNenhumaMensagemEncontrada();
  } else {
    const text = criptografarOuDescriptografar(textarea.value);
    inserirMensagem(text);
    exibirMensagem();
  }
}

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copiarConteudo() {
  navigator.clipboard.writeText(resultado.innerText);
  alert('Conteúdo copiado!');
}

criptografarButton.onclick = () => tentar(criptografar);
descriptografarButton.onclick = () => tentar(descriptografar);
copiarButton.onclick = copiarConteudo;
