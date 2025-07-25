const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
    const mesAtual = 7 // Supondo que o mês atual seja julho (7)
    // Calcula o ano de nascimento com base na idade e no mês de nascimento
    let anoDeNascimento = 2025 - idade // Supondo que o ano atual seja 2025
    if (mesDeNascimento > mesAtual) anoDeNascimento-- // Se o mês de nascimento for maior que o mês atual, subtrai 1 do ano de nascimento
    // Chama a função de impressão passando o ano de nascimento
    imprimir(anoDeNascimento) 
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimento é: ' + anoDeNascimento)
}

calcularAnoDeNascimento(27, 11, imprimirAnoDeNascimento)


// function dobrar(numero){
//     return numero * 2;
// }

// function triplicar(numero){
//     return numero * 3;
// }

// function quadruplicar(numero){
//     return numero * 4;
// }

// console.log(dobrar(2))

function multiplicar(multiplicar){
    return function(numero){
        return numero * multiplicar;
    }
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar(3));
console.log(triplicar(3));
console.log(quadruplicar(3));

