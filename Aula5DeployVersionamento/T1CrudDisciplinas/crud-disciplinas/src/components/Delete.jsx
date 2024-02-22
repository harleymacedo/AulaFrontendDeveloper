import { useState } from 'react'
import './Delete.css'

const Delete = () => {

    const [codigo, setCodigo] = useState('')

    const atualizarCodigo = (event) => {
        setCodigo(event.target.value)
    }

    const deletar = async () => {
        try {
            const url = `https://aula-backend-developer-fc7o.vercel.app/disciplina/${codigo}`
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({codigo: codigo})
            })
        } catch (error) {
            console.log('Erro detectado')
        }
        
    }

    return (
        <div className='form1'>
            <h2>Formulário de exclusão de disciplinas</h2>
            <form>
                <input type='text' name='Codigo' id='codigo' placeholder='Código' onChange={atualizarCodigo} />
                <input type='button' value='Excluir' id='btnAtualizar' onClick={deletar} />
            </form>
        </div>
    )
}

export default Delete