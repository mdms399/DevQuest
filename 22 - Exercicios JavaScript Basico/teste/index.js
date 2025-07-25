let respostaCasamento = confirm("Você quer casar comigo?");

if (respostaCasamento) {
    alert("Excelente você vai ser a mulher mais feliz desse mundo!");
} else if (respostaCasamento === false) {
   let respostaCasamento = confirm("Porque não? Casa comigo?");
   if (respostaCasamento) {
       alert("Ótimo! Nós teremos um casamento maravilhoso!");
   } else {
       let respostaCasamento = confirm("Porque esta negando? Você não me ama?");
       if (respostaCasamento) {
           alert("Que bom! O nosso amor é lindo e vamos ter um casamento maravilhoso!");
       } else {
           alert("Que pena! Você parecia ser uma pessoa mais legal.");
       }
   }
}