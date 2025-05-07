import { useState } from 'react'

export default function Post (props) {

    const [pontos, setPontos] = useState(0)

    function somarPontos() {
        setPontos(pontos + 1)
        props.somarTotais()
    }

    function subtrairPontos() {
        if (pontos > 0) {
            setPontos(pontos - 1)
            props.subtrairTotais()
        }
    }

    return (
        <div style={{backgroundColor: props.cor}}>
            <h2>Novo Post</h2>
            <p> {props.pensamento} </p>
            <input 
                type='button' 
                value='+ pontos' 
                onClick={somarPontos} 
            />
            <input 
                type='button' 
                value='- pontos' 
                onClick={subtrairPontos} 
            />
            <h3> {pontos} </h3>
            <h6> Pontos: {pontos} </h6>
            <h2> Points: {pontos} </h2>            
        </div>
    )
}
