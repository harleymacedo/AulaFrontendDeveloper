import {useState} from 'react'
import styles from './SimuladorConversorMoeda.module.css'

const SimuladorInvestimento = (props) => {

    const [valorInvestido, setValorInvestido] = useState(0.0)
    const [tipoInvestimento, setTipoInvestimento] = useState('TesouroDireto')
    const [tempo, setTempo] = useState(12)
    const [taxaTesouro, setTaxaTesouro] = useState(0.0085)
    const [taxaPoupanca, setTaxaPoupanca] = useState(0.0065)
    const [taxaIFix, setTaxaIFix] = useState(0.0072)
    const [taxaIbov, setTaxaIbov] = useState(0.0090)
    const [valorFinal, setValorFinal] = useState(0.0)
    const [aviso, setAviso] = useState('') 

    const calcular = () => {
        if (tipoInvestimento === 'TesouroDireto') {
            let result = valorInvestido * ( Math.pow( (1 + taxaTesouro), tempo ) )
            console.log(valorInvestido, taxaTesouro, tempo)
            setValorFinal(result)
        } else if (tipoInvestimento === 'Poupanca') {
            let result = valorInvestido * ( Math.pow( (1 + taxaPoupanca), tempo ) )
            console.log(valorInvestido, taxaPoupanca, tempo)
            setValorFinal(result)
        } else if (tipoInvestimento === 'IFix') {
            let result = valorInvestido * ( Math.pow( (1 + taxaIFix), tempo ) )
            console.log(valorInvestido, taxaIFix, tempo)
            setValorFinal(result)
        } else {
            let result = valorInvestido * ( Math.pow( (1 + taxaIbov), tempo ) )
            console.log(valorInvestido, taxaIbov, tempo)
            setValorFinal(result)
        }
        setAviso('Lembramos que são valores aproximados, as taxas podem mudar e os valores serem diferentes')
    }

    const atualizarTipoInvestimento = (event) => {
        setTipoInvestimento(event.target.value)
    }

    const atualizarValorInvestido = (event) => {
        setValorInvestido(event.target.value)
    }

    const atualizarTempoInvestimento = (event) => {
        setTempo(event.target.value)
    }

    return (
        <div className={styles.divPrincipal} style={{backgroundColor: props.cor}}>

            <h3 className={styles.textoTitulo1}>Simulador de Investimento</h3>

            <img src='./icons8-investidor-48.png' alt='Icone do componente' />

            <label className={styles.textoLabel}>Tipo de investimento:</label>
            <select className={styles.inputs} onChange={atualizarTipoInvestimento} >
                <option value='TesouroDireto'>Tesouro direto</option>
                <option value='Poupanca'>Poupança</option>
                <option value='IFix'>Fundos imobiliários</option>
                <option value='Acoes'>Ações</option>
            </select>

            <label className={styles.textoLabel}>Valor investido:</label>
            <input 
                type='number' 
                onChange={atualizarValorInvestido} 
                className={styles.inputs}
            />

            <label className={styles.textoLabel}>Tempo de investimento:</label>
            <select className={styles.inputs} onChange={atualizarTempoInvestimento} >
                <option value='12'>1 ano</option>
                <option value='24'>2 anos</option>
                <option value='36'>3 anos</option>
                <option value='48'>4 anos</option>
                <option value='60'>5 anos</option>
                <option value='72'>6 anos</option>
                <option value='120'>10 anos</option>
                <option value='240'>20 anos</option>
                <option value='360'>30 anos</option>                
            </select>

            <button onClick={calcular} className={styles.button1}>Calcular</button>
            <h3 className={styles.labelResultado}>Valor final: R$ {valorFinal.toFixed(2)}</h3>
            <h5 className={styles.aviso}>{aviso}</h5>
        </div>
    )
}

export default SimuladorInvestimento