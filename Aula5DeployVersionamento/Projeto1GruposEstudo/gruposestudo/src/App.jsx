import Login from './components/login/Login'
import './App.css'

function App() {    

    return (
        <div className='rootDiv'>     
            <div className='appHeader'>
                <h1>Grupos de Estudo</h1>
            </div>
            <div className='appBody'>
                <Login />                 
            </div>      
            <div className='appFooter'>
                <p>Desenvolvido por: <a href='https://harleymacedo.com.br'>Harley Macêdo</a></p>
            </div> 
        </div>
    )
}

export default App
