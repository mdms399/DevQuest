//switch(parametro){
//     case valor1:
//         <bloco de declaracao>
//         break;
//     case valor2:
//         <bloco de declaracao>
//         break;
//}

let  nomeFilme = 'Vingadores'

switch(nomeFilme){
    case 'Vingadores':
        console.log('É o filme dos Vingadores');
        break;
    case 'Batman vs Superman':
        console.log('É o filme do Batman vs Superman');
        break;
    case 'Capitão America':
        console.log('É o filme do Capitão America');
        break;
    default:
        console.log('É outro filme');
}


let avaliacao = 5;

switch(avaliacao){
    case 1:
        console.log('Filme muito ruim');
        break;
    case 2:
        console.log('Filme ruim');
        break;
    case 3:
        console.log('Filme regular');
        break;
    case 4:
        console.log('Filme bom');
        break;
    case 5:
        console.log('Filme muito bom');
        break;
    default:
        console.log('Outra Avaliação');
}