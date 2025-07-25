let tentativas = 0;
let respostaCasamento = false;

while (tentativas < 10) {
  respostaCasamento = confirm("Você quer casar comigo?");
  
  if (respostaCasamento) {
    alert("Excelente! Você vai ser a mulher mais feliz desse mundo!");
    break;
  }
  
  tentativas++;
}

if (!respostaCasamento && tentativas === 10) {
  alert("Que pena! Você parecia ser uma pessoa mais legal.");
}
