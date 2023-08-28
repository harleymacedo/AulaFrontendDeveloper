function tarefa1b (callback) {
    setTimeout( () => { 
        console.log('Tarefa 1b') 
        if (callback) callback()
    }, 9000 )
}
function tarefa2b (callback) {
    setTimeout( () => { 
        console.log('Tarefa 2b') 
        if (callback) callback()
    }, 8000 )
}
function tarefa3b () {
    setTimeout( () => { 
        console.log('Tarefa 3b')  
    }, 7000 )
}

module.exports = {tarefa1b, tarefa2b, tarefa3b}
