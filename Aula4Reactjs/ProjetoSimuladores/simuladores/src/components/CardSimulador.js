import {useState} from 'react'
import styles from './CardSimulador.module.css'
import { Link } from "react-router-dom"

const CardSimulador = (props) => {

    const [titulo, setTitulo] = useState(props.titulo)
    const [descricao, setDescricao] = useState(props.descricao)
    const [palavrasChave, setPalavrasChave] = useState(props.palavrasChave)

    return (
        <div className={styles.divPrincipalCard} style={{backgroundColor: props.cor}} >
            <h3 className={styles.textoH2}> {titulo} </h3>            
            <img src={props.imagem} alt='Icone do componente' />
            <p className={styles.textoP1}> {descricao} </p>            
            <Link to={props.linkButton}><button className={styles.button1}>Usar agora</button></Link>
        </div>
    )
}

export default CardSimulador