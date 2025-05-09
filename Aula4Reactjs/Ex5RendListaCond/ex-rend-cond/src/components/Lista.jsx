
import { useState } from 'react'

export default function Lista () {

    const [repositorios, setRepositorios] = useState([
        { id: 1, nome: 'Repositório 1' },
        { id: 2, nome: 'Repositório 2' },
        { id: 3, nome: 'Repositório 3' },
        { id: 4, nome: 'Repositório 4' },
    ])

    return (
        <div>
            <h1>Lista de repositórios</h1>
            <ul>
                {
                    repositorios.map((repo) => (
                        <li key={repo.id}>
                            Repositório: {repo.nome}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}