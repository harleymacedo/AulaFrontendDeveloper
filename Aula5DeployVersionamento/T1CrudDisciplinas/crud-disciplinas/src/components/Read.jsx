import { useState, useEffect } from 'react'
import './Read.css'
import { Button, Form } from 'react-bootstrap'

const Read = () => {

    const [disciplinas, setDisciplinas] = useState([])
    const [termoPesquisa, setTermoPesquisa] = useState('')

    useEffect(() => {
        setDisciplinas([])
    }, [])

    const atualizarTermoPesquisa = (event) => {
        console.log(event.target.value)
        setTermoPesquisa(event.target.value)
    }

    const pesquisar = async () => {
        try {
            let url = `https://aula-backend-developer-fc7o.vercel.app/disciplina/codigo/${termoPesquisa}`
            if (termoPesquisa === '') {
                url = 'https://aula-backend-developer-fc7o.vercel.app/disciplina/todas'
            }
            console.log(url)
            const dados = await fetch(url, { method: 'GET' })
            const dadosJson = await dados.json()
            const arrayTemp = []
            arrayTemp.push(dadosJson)
            if (termoPesquisa === '') {
                setDisciplinas(dadosJson)
            } else {
                setDisciplinas(arrayTemp)
            }
        } catch (error) {
            console.log('Erro detectado')
        }

    }

    return (
        <div className='form1'>
            <h2>Formulário de consulta de disciplinas</h2>
            <Form>
                <Form.Control type='text' placeholder='Código' onChange={atualizarTermoPesquisa} />
                <Button variant='success' onClick={pesquisar}>Pesquisar</Button>
            </Form>
                
            {disciplinas.map(
                (elemento, indice) => {
                    return (                        
                        <tr key={elemento.codigo}>
                            <td>{indice + 1}</td><td>{elemento.nome}</td> <td>{elemento.codigo}</td> <td>{elemento.cargaHoraria}</td>
                        </tr>
                    )
                })
            }

        </div>
    )

}

export default Read