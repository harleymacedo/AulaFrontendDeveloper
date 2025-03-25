import './Aluno.css'
import Navbar from '../navbar/Navbar'

export default function Aluno() {
    return (
        <div className='compAlunoDiv'>
            <Navbar />
            <div className='alunoDiv'>
                <div className='alunoHeader'>                
                    <h2>Aluno</h2>
                </div>
                <div className='alunoForm'>
                    <table className='alunoTable'>
                        <tr>
                            <th>Nome</th><th>Cidade</th><th>Grupos</th>
                        </tr>
                        <tr>
                            <td>Ana</td><td>Crato</td><td>Python, Javascript, Mobile, Web</td>
                        </tr>
                        <tr>
                            <td>Marcos</td><td>Crato</td><td>Javascript, AWS</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}