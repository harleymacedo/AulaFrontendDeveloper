//Importar o css do componente
import './Busca.css';

//Função arrow para retorno de JSX
const Busca = () => {

    const buscar = () => {
        console.log("Buscando...");
    }

    return (
        <div className="divBusca">
            <h3 className="tituloBusca">Busca na estrutura do curso de Sistemas de Informação</h3>
            <label className="label1">Termo: <input type="text" className="input1" /></label>
            <button onClick={buscar} className="button1">Buscar</button>
        </div>
    )
}

export default Busca;