
import { useMemo, useState } from 'react'

const CalculadoraSimples = () => {

    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)

    const atualizarNumero1 = (event) => {
        const valor = parseInt(event.target.value)
        setNumero1(valor)
    }

    const atualizarNumero2 = (event) => {
        const valor = parseInt(event.target.value)
        setNumero2(valor)
    }

    const somar = useMemo( () => {
        setResultado(numero1 + numero2)
        console.log('Executou o somar')
    }, [numero1, numero2] )

    return (
        <div>
            <h2>Componente Calculadora Simples</h2>
            <input type='number' placeholder='Numero 1' onChange={atualizarNumero1} />
            <input type='number' placeholder='Numero 2' onChange={atualizarNumero2} />
            <input type='button' value='Somar' onClick={somar} />
            <p>Resultado: {resultado} </p>
        </div>
    )
}

export default CalculadoraSimples