import './App.css'
import { createContext } from 'react'
import Perfil from './components/Perfil'
import ListaRepositorios from './components/hookUseEffect/ListaRepositorios'

export const nivelAtual = createContext(1)

function App() {

    return (
        <div className="App">
            <Perfil />
            <ListaRepositorios />
        </div>
    )
}

export default App
