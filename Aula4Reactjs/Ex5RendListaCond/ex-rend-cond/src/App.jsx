import { useState } from 'react'
import './App.css'
import Lista from './components/Lista'

function App() {
    const [logado, setLogado] = useState(true)
    const [nomeUsuario, setNomeUsuario] = useState('AnaLima')

    function exbirNome () {
        if (nomeUsuario) {
            return (<h4>{nomeUsuario}</h4>)
        } else {
            return null
        }
    }

    return (
        <div>
            <h2>Bem vindo ao Sistema</h2>
            {
                logado ? (<h3>Você está logado como Editor</h3>) : ''
            }
            {
                exbirNome()
            }
            <h3>Lista de produtos</h3>
            <Lista />
        </div>
    )
}

export default App
