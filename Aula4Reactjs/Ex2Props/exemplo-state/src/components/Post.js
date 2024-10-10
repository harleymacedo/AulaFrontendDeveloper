import { useState } from 'react'

function Post (props) {

    const [pontos, setPontos] = useState(0)

    return (
        <div style={{backgroundColor: props.cor}}>
            <h2>Novo Post</h2>
            <p> {props.pensamento} </p>
            <input type='button' value='+ pontos' onClick={ () => {setPontos(pontos + 1)} } />
            <input type='button' value='- pontos' onClick={ () => { if (pontos > 0) setPontos(pontos - 1)} } />
            <h3> {pontos} </h3>
            <h6> Pontos: {pontos} </h6>
            <h2> Points: {pontos} </h2>            
        </div>
    )
}

export default Post