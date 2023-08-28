//Funções com Callback
const geraPDF = (callBack) => {
    setTimeout( () => {
        console.log('Gerando PDF...')
        let info = ' PDF abcd. '
        if (callBack) { callBack(info) }
    }, 4000 );
}
const enviaEmail = (info) => {
    setTimeout( () => {
        console.log('Anexando pdf.' + info)
        console.log('Enviando email...')
    }, 1000 )
}

//Mantém o sincronismo
geraPDF( (info) => {
    enviaEmail(info)
} )