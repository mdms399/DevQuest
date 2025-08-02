function alternarCor() {
    let quadrado = document.querySelector('.quadrado');

    if (quadrado.classList.contains('azul')) {
        quadrado.classList.remove('azul');
    } else {
        quadrado.classList.add('azul');
    }
}
