//Funções sem Callback
const geraPDF = () => {
    setTimeout( () => {
        console.log('Gerando PDF...')
    }, 4000 )
}
const enviaEmail = () => {
    setTimeout( () => {
        console.log('Enviando email...')
    }, 1000 )
}

//Não mantém o sincronismo
geraPDF( () => {
    enviaEmail()
} )
