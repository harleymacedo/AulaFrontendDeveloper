//Função slice
let texto = 'O país do futebol'
let pedaco = texto.slice(2, 6)
console.log(pedaco)

//Função replace
let texto2 = 'O IFCE tem o curso de Sistemas de Informação'
let novoTexto2 = texto2.replace('IFCE', 'IFCE Campus Crato')
console.log(novoTexto2)

//Funções toLowerCase e toUpperCase
let texto3 = 'Lab Info 03'
let novoTexto3A = texto3.toLowerCase()
let novoTexto3B = texto3.toLocaleUpperCase()
console.log(novoTexto3A, novoTexto3B)

//Função trim
let texto4 = ' Turma com 25 alunos '
let texto4Novo = texto4.trim()
console.log(texto4Novo)

//Função charAt
let texto5 = 'Brasil'
let letra = texto5.charAt(0)
console.log(letra)

//Função split
var texto6 = 'O curso de Sistemas de Informação do IFCE Campus Crato'
var palavras1 = texto6.split(' ')
console.log(palavras1)

//Função indexOf
var texto7 = 'O IFCE fica com Bairro Gisélia Pinheiro'
var encontrado = texto7.indexOf('IFCE')
console.log('Encontrado: ', encontrado)
