function tarefa1 () {
    setTimeout( () => { console.log('Tarefa 1') }, 4000 )
}
function tarefa2 () {
    setTimeout( () => { console.log('Tarefa 2') }, 2000 )
}
function tarefa3 () {
    setTimeout( () => { console.log('Tarefa 3') }, 1000 )
}

module.exports = {tarefa1, tarefa2, tarefa3}
