
import { useState } from 'react'
import './Create.css'
import { Button, Form } from 'react-bootstrap'

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
                body: JSON.stringify({ nome: nome, codigo: codigo, cargaHoraria: ch })
            })
        } catch (error) {
            console.log('Erro detectado')
        }
    }

    return (
        <div className='div1'>
            <h2>Formulário de criação de disciplinas</h2>
            <Form className='form1'>
                <Form.Control type='text' placeholder='Nome' onChange={atualizarNome} />
                <Form.Control type='text' placeholder='Código' onChange={atualizarCodigo} />
                <Form.Control type='text' placeholder='Carga Horária' onChange={atualizarCh} />                
                <Button variant='success' onClick={inserir}>Criar</Button>
            </Form>
        </div>
    )
}

export default Create