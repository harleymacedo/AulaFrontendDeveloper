import {useState} from 'react'
import styles from './SimuladorFinanciarImovel.module.css'

const SimuladorInvestimento = (props) => {

    const [valorFinanciado, setValorFinanciado] = useState(0.0)
    const [valorParcela, setValorParcela] = useState(0.0)
    const [prazo, setPrazo] = useState(360)    
    const [taxaJuros, setTaxaJuros] = useState(0.00948)
    const [aviso, setAviso] = useState('')
    
    const atualizarValorFinanciado = (event) => {
        setValorFinanciado(event.target.value)
    }

    const atualizarPrazo = (event) => {
        setPrazo(event.target.value)
    }

    const calcular = () => {
        const result = valorFinanciado * taxaJuros * (Math.pow((1 + taxaJuros), prazo)) / ((Math.pow((1 + taxaJuros), prazo)) - 1)
        setValorParcela(result)
        setAviso('Lembramos que são valores aproximados, as taxas podem mudar e os valores serem diferentes')
    }

    return (
        <div className={styles.divPrincipal} style={{backgroundColor: props.cor}}>

            <h3 className={styles.textoTitulo1}>Financiamento de imóvel</h3>

            <img src='./icons8-casa-48.png' alt='Icone do componente' />

            <label className={styles.textoLabel}>Valor financiado:</label>
            <input 
                type='number' 
                onChange={atualizarValorFinanciado} 
                className={styles.inputs}
            />

            <label className={styles.textoLabel}>Prazo do financiamento(meses):</label>
            <select className={styles.inputs} onChange={atualizarPrazo} >
                <option value='12'>12</option>
                <option value='24'>24</option>
                <option value='36'>36</option>
                <option value='48'>48</option>
                <option value='60'>60</option>
                <option value='72'>72</option>
                <option value='96'>96</option>
                <option value='120'>120</option>
                <option value='240'>240</option>
                <option value='360'>360</option>                
            </select>

            <button onClick={calcular} className={styles.button1}>Calcular</button>
            <h3 className={styles.labelResultado}>Resultado: R$ {valorParcela.toFixed(2)}</h3>
            <h5 className={styles.aviso}>{aviso}</h5>
        </div>
    )
}

export default SimuladorInvestimento