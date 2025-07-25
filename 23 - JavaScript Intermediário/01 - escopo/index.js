if(true){
    const mensagem = 'Ola'
    console.log(mensagem);
}

console.log(mensagem); // Isso vai gerar um erro, pois 'mensagem' não está definida fora do bloco if

{
    const mensagem2 = 'Ola';
    console.log(mensagem2);
}

console.log(mensagem2); // Isso também vai gerar um erro, pois 'mensagem2' não está definida fora do bloco

{
    var mensagem3 = 'Ola';
    console.log(mensagem3);
}

console.log(mensagem3); // Isso vai funcionar, pois 'mensagem3' foi definida com 'var', que tem escopo global ou de função

function falar() {
    var mensagem4 = 'Olá mundo!';
    console.log(mensagem4);
}

falar(); // Isso vai funcionar, pois estamos chamando a função que define 'mensagem4'
console.log(mensagem4); // Isso vai gerar um erro, pois 'mensagem4' não está definida fora da função    

function falar2() {
    const mensagem5 = 'Olá mundo!';
    console.log(mensagem5);
    function falarOutraCoisa(){

    }

    falarOutraCoisa()
    console.log(mensagem5); // Isso vai funcionar, pois 'mensagem5' está definida no escopo da função 'falar2'
}

falar3()
//console.log(mensagem5)
console.log(falarOutraCoisa); // Isso vai gerar um erro, pois 'falarOutraCoisa' não está definida fora da função 'falar2'
console.log(url)