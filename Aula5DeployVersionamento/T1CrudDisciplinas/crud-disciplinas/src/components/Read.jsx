import { useState, useEffect } from 'react'

const Read = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect( () => {
        setDisciplinas([])
    }, [] )

    return (
        <div>
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