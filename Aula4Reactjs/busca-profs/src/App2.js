import './App.css'
import CardProfessor from './CardProfessor'
import { useState } from 'react'
import axios from 'axios'

function App() {

    const [professores, setProfessores] = useState([])

    const carregar = async () => {
        const url = 'https://node-express-api-rest-mock.vercel.app/professor/todos'
        const result = await axios.get(url)
        setProfessores(result.data)
    }

    return (
        <div className="App">
            <header className="App-header">
                <input type='button' onClick={carregar} value='Carregar' />
                <h4>Quantidade: { professores.length } </h4>
                {professores.map( function (professorAtual) {
                    return (
                        <CardProfessor professor={professorAtual} />
                    )
                })
                }   
            </header>
        </div>
    )
}

export default App
