
function CardProfessor (props) {
    return (
        <div style={{border: '1px solid silver', width: '400px', margin: '5px'}}>
            <h3>Card professor</h3>
            <ol>
                <li> Nome: { props.professor.nome } </li>
                <li> Área: { props.professor.area } </li>
            </ol>
        </div>
    )
}

export default CardProfessor