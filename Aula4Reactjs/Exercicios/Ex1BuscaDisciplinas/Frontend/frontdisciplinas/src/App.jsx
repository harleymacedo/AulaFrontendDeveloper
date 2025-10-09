import { useState } from 'react'
import './App.css'
import CardDisciplina from './components/CardDisciplina'

function App() {

    const [disciplinas, setDisciplinas] = useState([{
        "id": 1,
        "nome": "Lógica de Programação",
        "carga_horaria": 60,
        "sala": "Lab 101"
    },
    {
        "id": 2,
        "nome": "Algoritmos e Estruturas de Dados",
        "carga_horaria": 80,
        "sala": "Lab 102"
    }])


    return (
        <div>
            <h3>Lista de Disciplinas</h3>
            <input type='search' />
            <input type='button' value='Pesquisar' />
            {
                disciplinas.map( function (disciplinaAtual) {
                    return (
                        <CardDisciplina disciplina={disciplinaAtual} />
                    )
                } )
            }
        </div>
    )
}

export default App
