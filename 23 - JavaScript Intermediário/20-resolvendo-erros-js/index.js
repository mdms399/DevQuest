let valorBoleto = 100;

console.log(valorBolet);
console.log(valorBoleto)

let inputTelefone = document.getElementById('telefone');

inputTelefone.disabled = true;

function habilitarTelefone() {
    // Verifica se o input está desabilitado
    // Se estiver, habilita; se não, desabilita
    if (inputTelefone.disabled) {
        inputTelefone.disabled = false;
    } else {
        inputTelefone.disabled = true;
    }
}