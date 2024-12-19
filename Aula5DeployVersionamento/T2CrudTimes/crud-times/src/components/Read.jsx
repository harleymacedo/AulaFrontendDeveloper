
import './Read.css'

import { useState } from 'react'

function Read () {

    const [times, setTimes] = useState([])
    const [aviso, setAviso] = useState('')

    async function listar () {
        try {
            const url = 'https://aula-backend-developer.vercel.app/time/todos'            
            const result = await fetch(url, {method: 'GET'})            
            const dados = await result.json()
            console.log(dados.times)
            setTimes(dados.times)
        } catch (error) {
            console.log(error)
            setAviso('Times não encontrados')
        }
    }

    return (
        <div className='divPrincipalRead'>
            <h2>Componente Read - Leitura de dados</h2>
            <p> {aviso} </p>
            <input type='button' value='Listar' onClick={listar} />
            {times.map(function (timeAtual) {
                return(
                    <p key={timeAtual.nome}> Nome: {timeAtual.nome} - Pontos {timeAtual.pontos} </p>                
                )
            })}
        </div>
    )

}

export default Read 