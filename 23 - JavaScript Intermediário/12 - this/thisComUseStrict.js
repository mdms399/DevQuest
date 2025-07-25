'use strict';
console.log(this);
console.log(window);
console.log(window === this);

this.name = 'Daniel';
function saudar() {
    console.log('this no contexto da função', this);
    console.log('Ola, ' + this.name);
}

saudar();

let usuario = {
    nome: 'Daniel',
    saudar: function() {
        console.log('this no contexto do metodo, ', this);
        console.log('this.name no contexto do metodo, ', this.nome);
    }
}

usuario.saudar();

let comida = {
    nome: 'Brocolis',
    temperatura: 0,
}

comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento) {
    comidaParaCozinhar.temperatura = temperaturaDeCozimento;
}

console.log(comida);

comida.cozinhar(comida, 100);

console.log(comida);

comida.cozinhar = function(temperaturaDeCozimento) {
    console.log('this no contexto do objeto comida, ', this);
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida);

comida.cozinhar(comida, 100);

console.log(comida);
