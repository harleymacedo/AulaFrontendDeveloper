//Definindo classe com construtor explícito
class DispositivoEletonico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    ligar() {
        this.ligado = true
    }
}

//Definindo herança em classe
class Smartphone extends DispositivoEletonico { }

//Instanciando objeto
const d1 = new DispositivoEletonico('Smart TV')
console.log(d1)

//Instanciando objeto
const s1 = new Smartphone('Iphone 12')
s1.ligar()
console.log(s1)

//Uso de método estático
class Carro {
    static alo () {
        console.log('Sou um carro incompleto')
    }
}
Carro.alo()
