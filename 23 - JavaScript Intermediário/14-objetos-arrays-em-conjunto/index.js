let videoGame = {
    nome: 'Xbox',
    valor: 3000,
    jogos: [
        {nome: 'Final Fantasy'},
        {nome: 'Fallout'},
    ]
}

let jogo3 = {
    nome: 'Fifa',
}

videoGame.jogos.push(jogo3);

console.log(videoGame);

let cliente = {
    nome: 'Daniel',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'Final Fantasy'},
            {nome: 'Fallout'},
            {nome: 'Fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[2].nome); // Acessando o nome do terceiro jogo