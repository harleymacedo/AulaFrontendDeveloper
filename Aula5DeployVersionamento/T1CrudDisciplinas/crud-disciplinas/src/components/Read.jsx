import { useState, useEffect } from 'react'
import './Read.css'

const Read = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect( () => {
        setDisciplinas([])
    }, [] )

    const pesquisar = async () => {
        try {
            const url = 'https://aula-backend-developer-fc7o.vercel.app/disciplina/todas'
            const dados = await fetch(url, {method: 'GET'})
            const dadosJson = await dados.json()
            setDisciplinas(dadosJson)  
        } catch (error) {
            console.log('Erro detectado')
        }
        
    }

    return (
        <div className='form1'>
            <h2>Formulário de consulta de disciplinas</h2>
            <form>
                <input type='search' name='busca1' id='busca1' />
                <input type='button' value='Buscar' id='btnBusca1' onClick={pesquisar} />
            </form>
            {disciplinas.map( 
                (elemento) => {
                    return(
                        <li key={ elemento.nome }> { elemento.nome } </li>
                    )
                })
            }
        </div>
    )

}

export default Read