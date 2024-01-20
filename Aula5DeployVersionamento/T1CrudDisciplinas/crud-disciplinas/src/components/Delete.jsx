
import './Delete.css'

const Delete = () => {

    const deletar = () => {
        
    }

    return (
        <div className='form1'>
            <h2>Formulário de exclusão de disciplinas</h2>
            <form>
                <input type='text' name='Nome' id='nome' />
                <input type='text' name='CH' id='ch' />
                <input type='button' value='Atualizar' id='btnAtualizar' onClick={deletar} />
            </form>
        </div>
    )
}

export default Delete