import { useContext } from 'react'
import { nivelAtual } from '../App'

const Perfil = () => {
    return (
        <div>
            <h2>Tela de Perfil</h2>
            <h3>Nível atual: {useContext(nivelAtual)} </h3>
        </div>
    )
}

export default Perfil
