let frutas = ['banana', 'maçã', 'laranja', 'uva']

let frutasExtraidas = frutas.splice(1, 3)

console.log(frutasExtraidas) // ['maçã', 'laranja', 'uva']
console.log(frutas) // ['banana']

let frutasRemovidas = frutas.splice(1, 2)

console.log(frutasRemovidas) // ['maçã', 'laranja']

console.log(frutas) // ['banana', 'uva']

let removeEAdiciona = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pera')

console.log(frutas) // ['banana', 'Goiaba', 'Abacaxi', 'Pera', 'uva']
console.log(removeEAdiciona) // ['maçã', 'laranja']