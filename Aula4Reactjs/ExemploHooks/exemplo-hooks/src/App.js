import './App.css'
import { createContext } from 'react'
import Perfil from './components/Perfil'

export const nivelAtual = createContext(1)

function App() {

    return (
        <div className="App">
            <Perfil />
        </div>
    )
}

export default App
