// Passo 1: Solicita o nome do usuário
let nome = prompt("Qual o seu nome?");

// Passo 2: Exibe a mensagem de boas-vindas
alert(`Seja bem-vindo(a), ${nome}!`);

document.getElementById("mensagem").innerText = `Seja bem-vindo(a), ${nome}!`;
