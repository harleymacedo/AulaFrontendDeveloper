import {useState} from 'react'
import styles from './SimuladorConversorMoeda.module.css'
import axios from 'axios'

const SimuladorConversorMoeda = (props) => {

    const [valorOrigem, setValorOrigem] = useState(0.0)
    const [valorDestino, setValorDestino] = useState(0.0)
    const [moedaOrigem, setMoedaOrigem] = useState('USD')
    const [moedaDestino, setMoedaDestino] = useState('BRL')
    const [ultimosResultados, setUltimosResultados] = useState([])

    const atualizarValorOrigem = (event) => {
        setValorOrigem(event.target.value)
    }

    const atualizarMoedaOrigem = (event) => {
        setMoedaOrigem(event.target.value) 
    }

    const atualizarMoedaDestino = (event) => {
        setMoedaDestino(event.target.value) 
    }

    const converter = async () => {            
        let url = `https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`
        let result = await axios.get(url)
        const valorFinal = (parseFloat(valorOrigem) * result.data[`${moedaOrigem}${moedaDestino}`].bid).toFixed(2)
        setValorDestino(valorFinal)
        setUltimosResultados(...ultimosResultados.unshift(valorFinal))
    }

    return (
        <div className={styles.divPrincipal} style={{backgroundColor: props.cor}}>

            <h3 className={styles.textoTitulo1}>Conversor de moeda</h3>

            <img src='./icons8-moeda-48.png' alt='Icone do componente' />

            <label className={styles.textoLabel}>Moeda origem:</label>
            <select className={styles.inputs} onChange={atualizarMoedaOrigem} >
                <option value='USD'>Dólar americano</option>
                <option value='BRL'>Real brasileiro</option>
                <option value='CAD'>Dólar canadense</option>
                <option value='EUR'>Euro</option>
                <option value='BTC'>Bitcoin</option>
                <option value='CNY'>Yuan</option>
            </select>

            <label className={styles.textoLabel}>Valor:</label>
            <input 
                type='number' 
                value={valorOrigem} 
                onChange={atualizarValorOrigem} 
                className={styles.inputs}
            />

            <label className={styles.textoLabel}>Moeda destino:</label>
            <select className={styles.inputs} onChange={atualizarMoedaDestino} >
                <option value='BRL'>Real brasileiro</option>
                <option value='USD'>Dólar americano</option>
                <option value='CAD'>Dólar canadense</option>
                <option value='EUR'>Euro</option>
                <option value='BTC'>Bitcoin</option>
                <option value='CNY'>Yuan</option>
            </select>

            <button onClick={converter} className={styles.button1}>Converter</button>
            <h3 className={styles.labelResultado}> Resultado:
                { moedaDestino } 
                { valorDestino ? valorDestino : '' }
            </h3>

            <h4>Ultimos resultados: </h4>
            <ul>
                {
                    ultimosResultados.map( (elementoAtual, index) => {
                        return (
                            <li key={index}> {elementoAtual} </li>
                        )
                    } )
                }
            </ul>
        </div>
    )
}

export default SimuladorConversorMoeda