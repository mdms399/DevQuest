document.getElementById('quadrado').addEventListener('click', function() {
    if (this.classList.contains('cor2')) {
        this.classList.replace('cor2', 'cor1');
    } else {
        this.classList.replace('cor1', 'cor2');
    }
});''

function containsColor(quadrados) {
    return quadrados.classList.contains('cor2');
}

console.log(containsColor(document.getElementById('quadrado')));