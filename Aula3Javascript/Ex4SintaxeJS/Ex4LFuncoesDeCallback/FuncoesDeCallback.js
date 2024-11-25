//Funções não executarão em ordem
const {tarefa1, tarefa2, tarefa3} = require('./Auxiliar')
tarefa1()
tarefa2()
tarefa3()

//Funções executarão em ordem
const {tarefa1b, tarefa2b, tarefa3b} = require('./Auxilar2')
tarefa1b( () => {
    tarefa2b( () => {
        tarefa3b()
    } )
} )
