function calcularFatorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

function imprimirFatorial(numero) {
    const ehUmNumeroNegativo = numero < 0;

    if (ehUmNumeroNegativo) {
        console.log("Não é possivel calcular o fatoria de um número negativo.");
    }   else {
        const fatorial = calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é ${fatorial}`);
    }
}

const numero = -5;
imprimirFatorial(numero);
