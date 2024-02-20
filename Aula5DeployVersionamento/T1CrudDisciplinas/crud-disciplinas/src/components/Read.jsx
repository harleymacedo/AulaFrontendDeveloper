import { useState, useEffect } from 'react'
import './Read.css'

const Read = () => {

    const [disciplinas, setDisciplinas] = useState([])
    const [termoPesquisa, setTermoPesquisa] = useState('')

    useEffect( () => {
        setDisciplinas([])
    }, [] )

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
            const dados = await fetch(url, {method: 'GET'})
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
            <form>
                <input type='text' name='busca1' id='busca1' onChange={atualizarTermoPesquisa} />
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