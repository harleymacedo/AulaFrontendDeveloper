import './NovoProfessor.css'
import { useState } from 'react'
import axios from 'axios'

function NovoProfessor (props) {

    const [nome, setNome] = useState('')
    const [area, setArea] = useState('')
    const [professores, setProfessores] = useState([])
    const [mensagem, setMensagem] = useState('')

    const inserirNovoProfessor = async () => {
        const url = 'http://localhost:3001/professor'
        const params = {'nome': nome, 'area': area}
        const cabecalho = {
            headers: {
            'Content-Type': 'application/json'
            }
        }
        await axios.post(url, JSON.stringify(params), cabecalho)
        setMensagem('Novo professor foi inserido')
    }

    const listarProfessores = async () => {
        const url = 'http://localhost:3001/professor/todos'
        const result = await axios.get(url)
        setProfessores(result.data)
    }

    return (
        <div className='divPrincipal'>
            <h2>Novo Professor</h2>
            <p> <input type='text' placeholder='Nome' onChange={(event) => setNome(event.target.value)} /> </p>
            <p> <input type='text' placeholder='Área' onChange={(event) => setArea(event.target.value)} /> </p>
            <input type='button' value='Inserir' onClick={inserirNovoProfessor} />
            <h5> {mensagem} </h5>
            <div>
                <h3>Lista de Professores</h3>
                <input type='button' value='Listar' onClick={listarProfessores} />
                <div>
                    {
                        professores.map( (elemento) => {
                            return (
                                <li> {elemento.nome}, {elemento.area} </li>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    )
}

export default NovoProfessor