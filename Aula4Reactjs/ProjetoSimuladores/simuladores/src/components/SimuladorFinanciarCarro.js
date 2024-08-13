import { useState } from 'react'
import styles from './SimuladorFinanciarCarro.module.css'

const SimuladorFinanciarCarro = (props) => {

    const [valorCarro, setValorCarro] = useState(0.0)
    const [situacaoCarro, setSituacaoCarro] = useState('Novo')
    const [valorEntrada, setValorEntrada] = useState(0.0)
    const [numParcelas, setNumParcelas] = useState(48)
    const [valorParcela, setValorParcela] = useState(0.0)
    const [taxaJuros, setTaxaJuros] = useState(0.0185)
    const [aviso, setAviso] = useState('')

    const atualizarValorCarro = (event) => {
        setValorCarro(event.target.value)
    }

    const atualizarSituacaoCarro = (event) => {
        const sitCarro = event.target.value
        setSituacaoCarro(sitCarro)
        if (sitCarro === 'Novo') {
            setTaxaJuros(0.0185)
        } else {
            setTaxaJuros(0.0199)
        }
    }

    const atualizarValorEntrada = (event) => {
        setValorEntrada(event.target.value)
    }

    const atualizarNumParcelas = (event) => {
        setNumParcelas(event.target.value)
    }

    const calcular = () => {
        const valorFinanciado = valorCarro - valorEntrada
        const result = valorFinanciado * taxaJuros * (Math.pow((1 + taxaJuros), numParcelas)) / ((Math.pow((1 + taxaJuros), numParcelas)) - 1)
        setValorParcela(result)
        setAviso('Lembramos que são valores aproximados, as taxas podem mudar e os valores serem diferentes')
    }

    return (
        <div className={styles.divPrincipal} style={{ backgroundColor: props.cor }}>

            <h3 className={styles.textoTitulo1}>Financiamento de Carro</h3>

            <img src='./icons8-carro-48.png' alt='Icone do componente' />

            <label className={styles.textoLabel}>Situação do Carro:</label>
            <select className={styles.inputs} onChange={atualizarSituacaoCarro} >
                <option value='Novo'>Novo</option>
                <option value='Usado'>Usado</option>
            </select>

            <label className={styles.textoLabel}>Valor do carro:</label>
            <input
                onChange={atualizarValorCarro}
                type='number'
                className={styles.inputs}
            />

            <label className={styles.textoLabel}>Valor de entrada:</label>
            <input
                onChange={atualizarValorEntrada}
                type='number'
                className={styles.inputs}
            />

            <label className={styles.textoLabel}>Número de parcelas:</label>
            <select className={styles.inputs} onChange={atualizarNumParcelas} >
                <option value='12'>12</option>
                <option value='24'>24</option>
                <option value='48'>48</option>
                <option value='60'>60</option>
                <option value='72'>72</option>
            </select>

            <button onClick={calcular} className={styles.button1}>Calcular</button>
            <h3 className={styles.labelResultado}>Resultado: R$ {valorParcela.toFixed(2)} </h3>
            <h5 className={styles.aviso}>{aviso}</h5>
        </div>
    )
}

export default SimuladorFinanciarCarro