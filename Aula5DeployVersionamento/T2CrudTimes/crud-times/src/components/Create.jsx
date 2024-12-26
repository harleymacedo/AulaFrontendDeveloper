
import './Create.css'

import { useState } from 'react'

function Create () {

    const [nome, setNome] = useState('')
    const [pontos, setPontos] = useState('')
    const [aviso, setAviso] = useState('')

    async function cadastrar () {
        try {
            const url = 'https://api-times-n6k0vvvb5-harleyipgmailcoms-projects.vercel.app/time/inserir'
            await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({ nome: nome, pontos: pontos })
            })                        
            setAviso('Time cadastrado com sucesso')
        } catch (error) {
            console.log(error)
            setAviso('Erro durante o cadastro do time')
        }
    }

    function atualizarNome (event) {
        setNome(event.target.value)
    }

    function atualizarPontos (event) {
        setPontos(event.target.value)
    }

    return (
        <div className='divPrincipalCreate'>
            <h2>Componente Create - Cadastro de dados</h2>
            <p> {aviso} </p>
            <input type='text' placeholder='Nome' onChange={atualizarNome} />
            <input type='text' placeholder='Pontos' onChange={atualizarPontos} />
            <input type='button' value='Cadastrar' onClick={cadastrar} />            
        </div>
    )
}

export default Create