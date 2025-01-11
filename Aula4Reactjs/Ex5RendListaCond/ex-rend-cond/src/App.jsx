import { useState } from 'react'
import './App.css'

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
        </div>
    )
}

export default App
