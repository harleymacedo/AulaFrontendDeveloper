//Instanciar data e imprimir ano
let dataHora = new Date()
console.log(dataHora.getFullYear())

//Imprimir dia e Mês
let diaMes = dataHora.getDate() + '/' + (dataHora.getMonth() + 1)
console.log(diaMes)

//Imprimir data e hora formatada com toLocaleString
let dataHora2 = new Date()
console.log( dataHora2.toLocaleString('pt-br') )
