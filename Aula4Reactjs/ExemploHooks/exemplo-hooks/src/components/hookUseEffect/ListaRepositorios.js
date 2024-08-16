
import { useEffect, useState } from 'react'

const ListaRepositorios = () => {

    const [repositorios, setRepositorios] = useState([])
    
    useEffect( () => {
        carregaRepositorios() 
    }, [])

    const carregaRepositorios = async () => {
        const result = await fetch('http://api.github.com/users/harleymacedo/repos')
        const dados = await result.json()
        if (repositorios) setRepositorios(dados)
    }

    return (
        <div>
            <h2>Lista de Repositórios</h2>
            {
                repositorios.map( (elementoAtual) => {
                    return (
                        <li>Nome: {elementoAtual.name} </li>
                    )
                } )
            }
        </div>
    )
}

export default ListaRepositorios