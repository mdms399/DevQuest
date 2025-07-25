let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length

console.log(frutasTamanho) // 4
console.log(frutas[0]) // banana

for (let i = 0; i < frutasTamanho; i++) {
    console.log('Fruta: ' + frutas[i])
}

frutas.forEach(function(item, indice, array) {
    console.log(item)
    console.log('Fruta: ' + item)
    console.log(array)
})


frutas.push('manga')

console.log(frutas) // ['banana', 'maçã', 'laranja', 'pêra', 'manga']

frutas.pop() // remove o último elemento do array
console.log(frutas) // ['banana', 'maçã', 'laranja', '

frutas.shift() // remove o primeiro elemento do array
console.log(frutas) // ['maçã', 'laranja', 'pêra']

frutas.unshift('morango') // adiciona um elemento no início do array
console.log(frutas) // ['morango', 'maçã', 'laranja', 'pêra']

let posicaoLaranja = frutas.indexOf('laranja') // encontra a posição do elemento 'laranja'
console.log(posicaoLaranja) // 2