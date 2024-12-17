import DisciplinaProps from "./DisciplinaType"

function CardDisciplina (props: DisciplinaProps) {
    return (
        <div>
            <h2>Componente CardDisciplina</h2>
            <h3>Nome: {props.nome} </h3>
            <h3>Código: {props.codigo} </h3>
            <h3>Nome: {props.nome} </h3>
        </div>
    )
}

export default CardDisciplina