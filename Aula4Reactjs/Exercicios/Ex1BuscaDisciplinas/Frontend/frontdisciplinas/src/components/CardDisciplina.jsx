import './CardDisciplina.css'

function CardDisciplina (props) {
    return (
        <div className="cardDisciplina">
            <h2>Card Disciplina</h2>
            <p>Id: {props.disciplina.id} </p>
            <p>Nome: {props.disciplina.nome}</p>
            <p>CH.: {props.disciplina.ch}</p>
            <p>Sala: {props.disciplina.sala}</p>
        </div>
    )
}

export default CardDisciplina