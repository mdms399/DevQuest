console.log(document)

let p = document.getElementById('paragrafo1')

console.log(p)

let inputsPorClasse = document.getElementsByClassName('tag-de-input')

console.log(inputsPorClasse[0])

let inputsPorTag = document.getElementsByTagName('input');

console.log(inputsPorTag[0]);

let inputPorName = document.querySelectorAll('input[name="email"]');

console.log(inputPorName);