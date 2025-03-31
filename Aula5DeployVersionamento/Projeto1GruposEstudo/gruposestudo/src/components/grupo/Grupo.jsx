import './Grupo.css'
import Navbar from '../navbar/Navbar'
import { FaCirclePlus,  } from 'react-icons/fa6'
import { CiEdit } from "react-icons/ci"
import { CiCircleRemove } from "react-icons/ci"

export default function Grupo() {
    return (
        <div className='compGrupoDiv'>
            <Navbar />
            <div className='grupoDiv'>
                <div className='grupoHeader'>                    
                    <h2>Grupo</h2>
                </div>
                <div className='grupoForm'>
                    <p> <FaCirclePlus /> </p>
                    <table className='grupoTable'>
                        <tr>
                            <th>Nome</th><th>Descrição</th><th>Início</th><th>Término</th><th>Ações</th>
                        </tr>
                        <tr>
                            <td>React</td><td>Estudo sobre React</td><td>01/01/2025</td><td>01/01/2025</td><td> <CiEdit /> <CiCircleRemove /> </td>
                        </tr>
                        <tr>
                            <td>Node</td><td>Estudo sobre Node</td><td>01/01/2026</td><td>01/01/2026</td> <td> <CiEdit /> <CiCircleRemove /> </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}