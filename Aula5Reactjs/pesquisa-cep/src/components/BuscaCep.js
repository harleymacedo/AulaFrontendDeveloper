import './BuscaCep.css'
import {useState} from 'react'
import axios from 'axios'


const BuscaCep = (props) => {

    const [valor, setValor] = useState('')
    const [endereco, setEndereco] = useState('')

    const guardaValor = (event) => {
        setValor(event.target.value)
    }

    const buscar = async () => {
        const url = `https://cep.awesomeapi.com.br/json/${valor}`
        const result = await axios.get(url)
        setEndereco(result.data.address)
    }

    return (
        <div style={{backgroundColor: props.cor}}>
            <h2>Cálculo de Frete</h2>
            <input type="text" placeholder="Digite seu CEP" id="text1" onKeyUp={guardaValor} />
            <input type="button" value="Calcular" onClick={buscar} />
            <p> Endereço: {endereco} </p>
        </div>
    )
}

export default BuscaCep