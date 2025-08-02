let input = document.getElementById('meu-input');

input.addEventListener('input', function () {
    if (input.value !== "") {
        input.classList.add('preenchido');
    } else {
        input.classList.remove('preenchido');
    }
});
