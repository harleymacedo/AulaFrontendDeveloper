import './Login.css'

export default function Login () {
    return (
        <div className='loginDiv'>
            <div className='loginHeader'>
                <h2>Login no Sistema</h2>
            </div>
            <div className='loginForm'>
                <form>
                    <div>
                        <label>Nome de Usuário:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}