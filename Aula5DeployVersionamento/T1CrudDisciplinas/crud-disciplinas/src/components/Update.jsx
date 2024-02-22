import { useState } from 'react'
import './Update.css'

const Update = () => {

    const [codigo, setCodigo] = useState('')
    const [novoNome, setNovoNome] = useState('')
    const [novaCH, setNovaCH] = useState('')

    const atualizarCodigo = (event) => {
        setCodigo(event.target.value)
    }

    const atualizarNovoNome = (event) => {
        setNovoNome(event.target.value)
    }

    const atualizarNovaCH = (event) => {
        setNovaCH(event.target.value)
    }

    const atualizar = async () => {
        try {
            const url = 'https://aula-backend-developer-fc7o.vercel.app/disciplina'
            await fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({codigo: codigo, nome: novoNome, cargaHoraria: novaCH})
            })    
        } catch (error) {
            console.log('Erro detectado')
        }
        
    }

    return (
        <div className='form1'>
            <h2>Formulário de atualização de disciplinas</h2>
            <form>
                <input type='text' name='codigo' id='codigo' placeholder='Código' onChange={atualizarCodigo} />
                <input type='text' name='nome' id='nome' placeholder='nome' onChange={atualizarNovoNome} />
                <input type='text' name='ch' id='ch' placeholder='Carga Horária' onChange={atualizarNovaCH} />
                <input type='button' value='Atualizar' id='btnAtualizar' onClick={atualizar} />
            </form>
        </div>
    )
}

export default Update