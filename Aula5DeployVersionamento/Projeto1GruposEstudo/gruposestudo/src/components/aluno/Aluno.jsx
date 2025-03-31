import './Aluno.css'
import Navbar from '../navbar/Navbar'
import { FaCirclePlus,  } from 'react-icons/fa6'
import { CiEdit } from "react-icons/ci"
import { CiCircleRemove } from "react-icons/ci"

export default function Aluno() {
    return (
        <div className='compAlunoDiv'>
            <Navbar />
            <div className='alunoDiv'>
                <div className='alunoHeader'>                
                    <h2>Aluno</h2>
                </div>
                <div className='alunoForm'>
                    <p> <FaCirclePlus /> </p>
                    <table className='alunoTable'>
                        <tr>
                            <th>Nome</th><th>Cidade</th><th>Grupos</th><th>Ações</th>
                        </tr>
                        <tr>
                            <td>Ana</td><td>Crato</td><td>Python, Javascript, Mobile, Web</td><td> <CiEdit /> <CiCircleRemove /> </td>
                        </tr>
                        <tr>
                            <td>Marcos</td><td>Crato</td><td>Javascript, AWS</td><td> <CiEdit /> <CiCircleRemove /> </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}