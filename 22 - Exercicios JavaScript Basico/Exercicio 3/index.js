const promocaoHospedagem = confirm("Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?");

if (promocaoHospedagem) {
    alert("Ótimo! Nós temos as melhores camas de toda a região!");
} else if (promocaoHospedagem === false) {
    alert("Que pena! Você parecia ser uma pessoa mais legal.");
}