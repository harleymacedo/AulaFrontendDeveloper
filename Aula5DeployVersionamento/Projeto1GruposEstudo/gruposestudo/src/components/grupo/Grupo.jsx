import './Grupo.css'
import Navbar from '../navbar/Navbar'

export default function Grupo() {
    return (
        <div className='compGrupoDiv'>
            <Navbar />
            <div className='grupoDiv'>
                <div className='grupoHeader'>                    
                    <h2>Grupo</h2>
                </div>
                <div className='grupoForm'>
                    <table className='grupoTable'>
                        <tr>
                            <th>Nome</th><th>Descrição</th><th>Início</th><th>Término</th>
                        </tr>
                        <tr>
                            <td>React</td><td>Estudo sobre React</td><td>01/01/2025</td><td>01/01/2025</td>
                        </tr>
                        <tr>
                            <td>Node</td><td>Estudo sobre Node</td><td>01/01/2026</td><td>01/01/2026</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}