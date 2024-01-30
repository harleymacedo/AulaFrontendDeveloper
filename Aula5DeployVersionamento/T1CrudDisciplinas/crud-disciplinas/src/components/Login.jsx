//Imports gerais
import { useState } from 'react'
import './Login.css'

const Login = () => {

    const [usuario, setUsuario] = useState('') 
    const [senha, setSenha] = useState('')

    const logar = async () => {
        const url = 'https://aula-backend-developer-fc7o.vercel.app/usuario/valida'
        const dados = await fetch(url, requestOptions: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {'usuario': usuario, 'senha': senha}, 
        })
        console.log(dados)
    }

    const atualizaUsuario = (event) => {
        setUsuario(event.target.value)
        console.log(usuario)
    }

    const atualizaSenha = (event) => {
        setSenha(event.target.value)
    }

    return (
        <div className="form1">
            <h2>Login no sistema</h2>
            <form>
                <input type='text' name='usuario' id='usuario' onChange={atualizaUsuario} />
                <input type='password' name='senha' id='senha' onChange={atualizaSenha} />
                <input type='button' value='Entrar' id='btnLogar' onClick={logar} />
            </form>
        </div>
    )
}

export default Login