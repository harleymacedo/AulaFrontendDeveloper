import './Delete.css'
import { useState } from 'react'

function Delete () {

    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    function atualizarNome (event) {
        setNome(event.target.value)
    }

    async function excluir () {
        try {
            const url = 'https://api-times-n6k0vvvb5-harleyipgmailcoms-projects.vercel.app/time/excluir'
            await fetch(url, {
            method: 'DELETE',
            headers: {
                'ContentType': 'application/json'
            },
            body: JSON.stringify({nome: nome})
        })
        setMensagem('Exclusão realizada com sucesso')
        } catch (error) {
            console.log(error)
            setMensagem('Erro ao excluir')
        }
        
    }

    return (
        <div className="divPrincipalDelete" >
            <h2>Componente de delete</h2>
            <input type='text' placeholder='nome' onChange={atualizarNome} />
            <input type='button' value='Exluir' onChange={excluir} />
        </div>
    )
}

export default Delete