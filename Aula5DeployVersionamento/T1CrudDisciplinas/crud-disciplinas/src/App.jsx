import './App.css'
import Login from './components/Login'
import { NavLink } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <h1>Sistema de Disciplinas</h1>
            <Login />
            <p>Desenvolvido para as aulas de PSW1 e PSW2 do IFCE Campus Crato</p>
        </div>
    )
}

export default App
