//Funções com Callback
const geraPDF = (callBack) => {
    setTimeout( () => {
        console.log('Gerando PDF...')
        if (callBack) { callBack() }
    }, 4000 );
}
const enviaEmail = () => {
    setTimeout( () => {
        console.log('Enviando email...')
    }, 1000 )
}

//Mantém o sincronismo
geraPDF( () => {
    enviaEmail()
} )
