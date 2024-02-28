//Formas de declarar função
function adicionar (num1, num2) {
    return num1 + num2
}

const adicionar2 = function (num1, num2) {
    return num1 + num2 
}

const adicionar3 = (num1, num2) => {
    return num1 + num2
}

console.log(adicionar(1, 2))
console.log(adicionar2(1, 2))
console.log(adicionar3(1, 2))
