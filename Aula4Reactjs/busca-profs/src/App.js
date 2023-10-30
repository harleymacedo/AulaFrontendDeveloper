import './App.css'
import CardProfessor from './CardProfessor'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

    const [professores, setProfessores] = useState([])
    const [texto, setTexto] = useState('')

    useEffect( () => {carregar()}, [] )

    const carregar = async () => {
        const url = 'https://node-express-api-rest-mock.vercel.app/professor/todos'
        const result = await axios.get(url)
        setProfessores(result.data)
    }

    const pesquisar = async () => {
        const url = 'https://node-express-api-rest-mock.vercel.app/professor/todos'
        const result = await axios.get(url)
        const profsFiltrados = result.data.filter( (profAtual) => {return (profAtual.nome === texto)} )
        setProfessores(profsFiltrados)
    }

    const atualizarTexto = (event) => {
        setTexto(event.target.value)
    }

    return (
        <div className="App">
            <header className="App-header">
                <input type='text' onChange={atualizarTexto} placeholder='Texto de pesquisa' />
                <input type='button' onClick={pesquisar} value='Pesquisar' />
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
