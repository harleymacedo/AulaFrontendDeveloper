//Estrutura for
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//Estrutura for in
let usuario = {
    nome: 'Ana',
    email: 'ana@servidor.com',
    cidade: 'Crato'
}
for (const atributo in usuario) {
    console.log(atributo)
}

//Estrutura forEach
let opcoes = ['a', 'b', 'c']
opcoes.forEach(elemento => {
    console.log(elemento)
})

//Estrutura while
let j = 1
let resultado = 1
while (j <= 5) {
    resultado = resultado * j
    j++
}
console.log(resultado)

//Estrutura do while
let z = 1
do {
    console.log(z)
} while (z < 1)
