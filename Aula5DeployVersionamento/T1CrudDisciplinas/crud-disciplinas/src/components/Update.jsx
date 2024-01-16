
import './Update.css'

const Update = () => {

    const atualizar = async () => {
        const url = 'https://aula-backend-developer-fc7o.vercel.app/disciplina'
        await fetch(url, {method: 'UPDATE'})
    }

    return (
        <div className='form1'>
            <h2>Formulário de atualização de disciplinas</h2>
            <form>
                <input type='text' name='Nome' id='nome' />
                <input type='text' name='CH' id='ch' />
                <input type='button' value='Atualizar' id='btnAtualizar' onClick={atualizar} />
            </form>
        </div>
    )
}

export default Update