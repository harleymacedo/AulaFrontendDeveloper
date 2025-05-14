
export default function Card({ props }) {
    return (
        <div className="card">
            <h3>{props.nome}</h3>
            <p>R$ {props.preco}</p>
            <p>{props.descricao}</p>
            <button>Comprar</button>
        </div>
    )
}