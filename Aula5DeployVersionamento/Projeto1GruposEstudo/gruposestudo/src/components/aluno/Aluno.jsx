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

                    {/* Button trigger modal */}
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                    </button>

                    {/* Modal */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Fim do modal */}
                </div>
            </div>
        </div>
    )
}