
function Post (props) {
    return (
        <div style={{backgroundColor: props.cor}}>
            <h2>Componente Post aqui</h2>
            <p>Titulo: {props.titulo} </p>
            <p>Foto: {props.foto} </p>
            <p>curtidas: {props.curtidas} </p>
            <button>Curtir</button>
        </div>
    )
}

export default Post