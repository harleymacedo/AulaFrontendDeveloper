//Importar o css do componente
import './Busca.css';
import {useState} from 'react';
import axios from 'axios';

//Função arrow para retorno de JSX
const Busca = (props) => {

    const [professores, setProfessores] = useState([]);

    const buscar = async () => {
        const url = 'https://node-express-api-rest-mock.vercel.app/professor/todos';
        const result = await axios.get(url);
        const dados = result.data;
        setProfessores(dados);
    }

    return (
        <div className={props.tema}>
            <h3 className="tituloBusca">Busca na estrutura do curso de Sistemas de Informação</h3>
            <label className="label1">Termo: <input type="text" className="input1" /></label>
            <button onClick={buscar} className="button1">Buscar</button>
            <div className="divResultado">
                {professores.map( (objetoAtual) => {
                    return ( objetoAtual.nome );
                } )}
            </div>
        </div>
    )
}

export default Busca;