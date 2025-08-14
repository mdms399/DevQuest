const conteudos = [
    { titulo: 'Titulo imagem 1', cor: '#C50000', imagem: '../image/01.jpg' },
    { titulo: 'Titulo imagem 2', cor: '#D9DD10', imagem: '../image/02.jpg' },
    { titulo: 'Titulo imagem 3', cor: '#A63A17', imagem: '../image/03.jpg' },
    { titulo: 'Titulo imagem 4', cor: '#10ACDD', imagem: '../image/04.jpg' }
];


let indiceAtual = 0;

const tituloElemento = document.querySelector('.corpo .titulo');
const linkElemento = document.querySelector('.corpo a');
const bodyElemento = document.body;
const setaEsquerda = document.querySelector('.esquerda');
const setaDireita = document.querySelector('.direita');

function atualizarSlide() {
    const slide = conteudos[indiceAtual];

    // Atualiza título e cor do link
    tituloElemento.textContent = slide.titulo;
    linkElemento.style.color = slide.cor;

    // Atualiza imagem de fundo
    bodyElemento.style.backgroundImage = `url('${slide.imagem}')`;
    bodyElemento.style.backgroundPosition = 'center';
    bodyElemento.style.backgroundSize = 'cover';
    bodyElemento.style.backgroundRepeat = 'no-repeat';

    // Controla opacidade das setas
    setaEsquerda.style.opacity = indiceAtual === 0 ? '0.5' : '1';
    setaDireita.style.opacity = indiceAtual === conteudos.length - 1 ? '0.5' : '1';
}

// Eventos das setas
setaDireita.addEventListener('click', () => {
    if (indiceAtual < conteudos.length - 1) {
        indiceAtual++;
        atualizarSlide();
    }
});

setaEsquerda.addEventListener('click', () => {
    if (indiceAtual > 0) {
        indiceAtual--;
        atualizarSlide();
    }
});

// Inicializa o primeiro slide
atualizarSlide();
