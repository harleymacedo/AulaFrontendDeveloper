import './App.css'
import { createContext } from 'react'
import Perfil from './components/hookUseContext/Perfil'
import ListaRepositorios from './components/hookUseEffectUseState/ListaRepositorios'
import ControleForm from './components/hookUseMemo/ControleForm'
import CalculadoraSimples from './components/hookUseMemo/CalculadoraSimples'

export const nivelAtual = createContext(1)

function App() {

    return (
        <div className="App">
            <Perfil />
            <ListaRepositorios />
            <ControleForm />
            <CalculadoraSimples />
        </div>
    )
}

export default App
