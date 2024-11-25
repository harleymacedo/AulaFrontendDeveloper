//Função que retorna uma promise
const algoDemorado = () => {
    return new Promise( (resolve) => {
        setTimeout( () => resolve('Algo demorado feito'), 3000)
    });
}

//Função com async/await
const chamaAlgoDemorado = async () => {
    console.log('Antes')
    console.log(await algoDemorado())
    console.log('Depois')
}
chamaAlgoDemorado()
