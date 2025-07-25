/*
    == ---- igual ---- a==b ---- verdadeiro se A for igual a B
    === ---- idêntico ---- a===b ---- verdadeiro se A for idêntico a B
    != ---- diferente ---- a != b ---- verdadeiro se o A for igual a B
    !== ---- não idêntico ---- a !== b ---- verdadeiro se o A não for idêntico a B
    < ---- menor que ----  a < b ---- verdadeiro quando A for menor que B
    <= ---- menor igual que ---- a <= b ---- verdadeiro quando A for menor ou igual a B
    > ---- maior que ---- a > b ---- verdadeiro quando A for maior que B
    >= ---- maior igual que ---- a >= b ---- verdadeiro quando A for maior ou igual a B
*/

// const a = 3
// const b = 3

// console.log(a <= b)

const a = 2
const b = 2

console.log(a === b && a <=b)
// V e V = V

console.log(a === b && a < b)
// V e F = F

console.log(a > b && a === b)
// F e V = F

console.log(a > b && a < b)
// F e F = F

// OR //

console.log(a === b || a <=b)
//V ou V = V

console.log(a === b || a < b)
//V ou F = V

console.log(a > b || a ===b)
//F ou V = V

console.log(a > b || a < b)
//F ou F = F

// NOT //

console.log(!(a === b)) //false

console.log(!(a < b)) //true
