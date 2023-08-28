//Uso da função map
var studios = ['Warner Bros', '21 Century', 'Sony']
studios.map( function (s) { console.log(s.length) } )

//Uso da função reduce
var numeros = [8, 9, 4, 5, 9, 9]
var soma = numeros.reduce(function (total, numero) { 
    return total + numero 
} )
console.log(soma)
