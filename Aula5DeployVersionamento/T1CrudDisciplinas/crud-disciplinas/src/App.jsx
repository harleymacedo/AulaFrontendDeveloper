import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <div>
            <h1>Sistema de Disciplinas</h1>
            <p>Desenvolvido para as aulas de PSW1 e PSW2 do IFCE Campus Crato</p>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default App
