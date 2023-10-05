import './App.css'
import CardProfessor from './CardProfessor'
import { useState } from 'react'


function App() {

    const [professores, setProfessores] = useState([
        {"nome": "Joana", "area": "Banco de dados"},
        {"nome": "Yago", "area": "Estrutura de dados"},
        {"nome": "Teresa", "area": "Engenharia de software"}
    ])

    return (
        <div className="App">
            <header className="App-header">
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
