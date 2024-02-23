
import { useState } from 'react'
import './Create.css'
import { Button } from 'react-bootstrap'

const Create = () => {

    const [nome, setNome] = useState('')
    const [codigo, setCodigo] = useState('')
    const [ch, setCh] = useState('')

    const atualizarNome = (event) => {
        setNome(event.target.value)
    }

    const atualizarCodigo = (event) => {
        setCodigo(event.target.value)
    }

    const atualizarCh = (event) => {
        setCh(event.target.value)
    }

    const inserir = async () => {
        try {
            const url = 'https://aula-backend-developer-fc7o.vercel.app/disciplina'
            await fetch(url, {
                method: 'POST', 
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({nome: nome, codigo: codigo, cargaHoraria: ch})
            })
        } catch (error) {
            console.log('Erro detectado')
        }
    }

    return (
        <div className='form1'>
            <h2>Formulário de criação de disciplinas</h2>
            <form>
                <input type='text' name='Nome' id='nome' onChange={atualizarNome} />
                <input type='text' name='Codigo' id='codigo' onChange={atualizarCodigo} />
                <input type='text' name='CH' id='ch' onChange={atualizarCh} />
                <input type='button' value='Criar' id='btnBusca1' onClick={inserir} />
                <Button variant='primary' onClick={inserir}>Criar</Button>
            </form>
        </div>
    )
}

export default Create