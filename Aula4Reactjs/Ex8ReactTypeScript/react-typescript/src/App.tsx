import { useState } from 'react'
import './App.css'
import CardDisciplina from './components/CardDisciplina'

function App() {
    const [disciplinas, setDisciplinas] = useState([])

    return (
        <>
            <div>
                disciplinas.map ( function (disciplinaAtual) {
                    return (
                        <CardDisciplina />
                    )
                } )
            </div>
        </>
    )
}

export default App
