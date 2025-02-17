let indiceAtual = 0;
let intervalo;

// Função para mover o carrossel
function moverCarrossel() {
    const container = document.querySelector('.carrossel-container');
    const itens = document.querySelectorAll('.carrossel-item');
    const totalItens = itens.length;

    // Atualiza o índice atual
    indiceAtual++;

    // Verifica se o índice ultrapassou os limites
    if (indiceAtual >= totalItens) {
        indiceAtual = 0; // Volta para o primeiro item
    }

    // Calcula o deslocamento horizontal
    const offset = -indiceAtual * 100;
    container.style.transform = `translateX(${offset}%)`;
}

// Função para auto-play (sentido único)
function iniciarAutoPlay() {
    intervalo = setInterval(moverCarrossel, 3000); // Muda a imagem a cada 3 segundos
}

// Pausa o auto-play ao passar o mouse
function pausarAutoPlay() {
    clearInterval(intervalo);
}

// Inicia o auto-play quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    iniciarAutoPlay();

    // Pausa e retoma o auto-play ao passar o mouse
    const carrossel = document.querySelector('.carrossel');
    carrossel.addEventListener('mouseenter', pausarAutoPlay);
    carrossel.addEventListener('mouseleave', iniciarAutoPlay);
});