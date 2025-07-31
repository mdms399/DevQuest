function adicionarComentario() {
    // Obtém o elemento de input pelo nome 'novo-comentario'
    let inputComentario = document.getElementsByName('novo-comentario');

    // Pega o valor digitado no input (primeiro elemento do array retornado)
    let textoDigitado = inputComentario[0].value;

    // Seleciona o elemento onde os novos comentários serão exibidos
    let novosComentarios = document.getElementById('novos-comentarios');

    // Adiciona o novo comentário ao conteúdo HTML do elemento selecionado
    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado}</p>`;
}