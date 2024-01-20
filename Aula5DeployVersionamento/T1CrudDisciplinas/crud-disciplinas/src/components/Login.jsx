
import './Login.css'

const Login = () => {

    const logar = () => {

    }

    return (
        <div className="form1">
            <h2>Login no sistema</h2>
            <form>
                <input type='text' name='usuario' id='usuario' />
                <input type='password' name='senha' id='senha' />
                <input type='button' value='Entrar' id='btnLogar' onClick={logar} />
            </form>
        </div>
    )
}

export default Login