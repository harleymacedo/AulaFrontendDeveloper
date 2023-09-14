import './BuscaCep.css'


const BuscaCep = (props) => {
    return (
        <div style={{backgroundColor: props.cor}}>
            <h2>Cálculo de Frete</h2>
            <input type="text" placeholder="Digite seu CEP" id="text1" />
            <input type="button" value="Calcular" />
        </div>
    )
}

export default BuscaCep