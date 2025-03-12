import Login from './components/login/Login'
import Grupo from './components/grupo/Grupo'
import './App.css'

function App() {    

    return (
        <div className='rootDiv'>     
            <div className='appHeader'>
                <h1>Grupos de Estudo</h1>
            </div>
            <div className='appBody'>
                <Login /> 
                <Grupo />
            </div>      
            <div className='appFooter'>
                <p>Desenvolvido por: <a href='https://harleymacedo.com.br'>Harley Macêdo</a></p>
            </div> 
        </div>
    )
}

export default App
