//Atributo length
var estados = ['Ceará', 'São Paulo', 'Minas Gegais'];
console.log(estados.length);

//Uso do índice
console.log(estados[0])

//Função sort()
var frutas = ['Abacate', 'Manga', 'Laranja', 'Banana'];
frutas.sort();
console.log(frutas);

//Função forEach()
var disciplinas = ['BD1', 'BD2', 'PSW1', 'PSW2'];
disciplinas.forEach( (valor, indice) => {
    console.log(`Valor: ${valor} - Indice: ${indice}`);
});

//Array armazenando vários tipos de dados
const variados = []
variados[0] = 'Apple'
variados[1] = Date.now()
variados[2] = function funcao1 () {}
variados.push(10)
console.log(variados)

//Teste de array
console.log( Array.isArray(variados) )
console.log(typeof variados)
