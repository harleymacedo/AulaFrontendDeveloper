import './App.css'
import { createContext, useState } from 'react'
import Perfil from './components/hookUseContext/Perfil'
import ListaRepositorios from './components/hookUseEffectUseState/ListaRepositorios'
import ControleForm from './components/hookUseMemo/ControleForm'
import CalculadoraSimples from './components/hookUseMemo/CalculadoraSimples'

export const AppContext = createContext(null)

function App() {

    const [nivel, setNivel] = useState(1)

    return (
        <div className="App">
            <h2>Nivel atual: {nivel}</h2>
            <AppContext.Provider value={{nivel, setNivel}}>
                <Perfil />
            </AppContext.Provider>
            <ListaRepositorios />
            <ControleForm />
            <CalculadoraSimples />
        </div>
    )
}

export default App
