import { useContext } from 'react'
import { AppContext } from '../../App'

const Perfil = () => {

    const {setNivel} = useContext(AppContext)

    return (
        <div>
            <h2>Tela de Perfil</h2>
            <button onClick={ () => {setNivel(2)} } >Mudar nível</button>
        </div>
    )
}

export default Perfil
