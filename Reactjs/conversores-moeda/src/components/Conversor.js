import './Conversor.css';
import {useState} from 'react';
import axios from 'axios'; 

const Conversor = (props) => {

    const [valorOrigem, setValorOrigem] = useState(0.0);
    const [valorDestino, setValorDestino] = useState(0.0);

    const atualizarValorOrigem = (event) => {
        setValorOrigem(event.target.value);
    }

    const converter = async () => {
        let url = `https://economia.awesomeapi.com.br/json/last/${props.moedaOrigem}-${props.moedaDestino}`;
        let result = await axios.get(url);
        setValorDestino( (parseFloat(valorOrigem) * result.data[`${props.moedaOrigem}${props.moedaDestino}`].bid).toFixed(2) );
    }

    return (
        <div className="divPrincipal" style={{backgroundColor: props.cor}}>
            <h3>Conversor de {props.moedaOrigem} para {props.moedaDestino}</h3>
            <label>Moeda Origem: <input value={valorOrigem} onChange={atualizarValorOrigem} /></label>
            <button onClick={converter}>Converter</button>
            <h4>Moeda destino: {props.moedaDestino} {valorDestino}</h4>
        </div>
    )
}

export default Conversor;