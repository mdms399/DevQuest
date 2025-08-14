const inputs = document.querySelectorAll(".meu-input");

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value !== "") {
      input.classList.add("preenchido");
    } else {
      input.classList.remove("preenchido");
    }
  });
});
