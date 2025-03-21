import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login.jsx'
import Grupo from './components/grupo/Grupo.jsx'
import Aluno from './components/aluno/Aluno.jsx'

function App() {

    return (
        <div className='rootDiv'>
            <div className='appHeader'>
                <h1>Grupos de Estudo</h1>
            </div>            
            <div className='appBody'>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/grupo' element={<Grupo />} />
                    <Route path='/aluno' element={<Aluno />} />
                </Routes>
            </div>
            <div className='appFooter'>
                <p>Desenvolvido por: <a href='https://harleymacedo.com.br'>Harley Macêdo</a></p>
            </div>
        </div>
    )
}

export default App
