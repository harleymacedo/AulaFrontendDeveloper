import './Login.css'
import Button from 'react-bootstrap/Button'

export default function Login () {
    return (
        <div className='loginDiv'>
            <div className='loginHeader'>
                <h2>Login no Sistema</h2>
            </div>
            <div className='loginForm'>
                <form action="/logar" method="post">
                    <div className='divForm'>
                        <div className='divFilds'>
                            <label>Nome de Usuário:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className='divFilds'>
                            <label>Senha:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className='divSenha'>
                            <a href='/Grupo'> <Button variant='Primary'> Entrar </Button> </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}