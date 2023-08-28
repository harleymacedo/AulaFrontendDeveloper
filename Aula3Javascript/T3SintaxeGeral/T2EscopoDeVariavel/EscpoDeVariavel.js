//var e escopo de função
{
    var x = 2
}
console.log(x)

//let e escopo de bloco
{
    let y = 2
}
console.log(y)

//const e escopo de bloco
{
    const z = 5
}
console.log(z)

//const com mudança de valores do objeto
const notebook = {marca: 'Apple', modelo: 'Macbook Air'}
notebook.modelo = 'Macbook Air M1'
