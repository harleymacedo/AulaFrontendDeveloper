import './Evento.css'
import Navbar from '../navbar/Navbar'
import { FaCirclePlus,  } from 'react-icons/fa6'
import { CiEdit } from "react-icons/ci"
import { CiCircleRemove } from "react-icons/ci"

export default function Evento() {
    return (
        <div className='compEventoDiv'>
            <Navbar />
            <div className='eventoDiv'>
                <div className='eventoHeader'>                
                    <h2>Evento</h2>
                </div>
                <div className='eventoForm'>
                    <p> <FaCirclePlus /> </p>
                    <table className='eventoTable'>
                        <tr>
                            <th>Nome</th><th>Local</th><th>Data</th> <tr>Ações</tr>
                        </tr>
                        <tr>
                            <td>Python</td><td>Crato</td><td>01/01/2022</td><td> <CiEdit /> <CiCircleRemove /> </td>
                        </tr>
                        <tr>
                            <td>Javascript</td><td>Crato</td><td>01/01/2022</td><td> <CiEdit /> <CiCircleRemove /> </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}