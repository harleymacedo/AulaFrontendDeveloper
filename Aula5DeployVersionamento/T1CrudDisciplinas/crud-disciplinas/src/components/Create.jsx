
const Create = () => {

    const inserir = () => {

    }

    return (
        <div className='form1'>
            <h2>Formulário de criação de disciplinas</h2>
            <form>
                <input type='text' name='Nome' id='nome' />
                <input type='text' name='CH' id='ch' />
                <input type='button' value='Criar' id='btnBusca1' onClick={inserir} />
            </form>
        </div>
    )
}

export default Create