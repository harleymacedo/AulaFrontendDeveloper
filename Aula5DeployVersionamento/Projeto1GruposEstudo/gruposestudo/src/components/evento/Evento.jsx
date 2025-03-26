import './Evento.css'
import Navbar from '../navbar/Navbar'

export default function Evento() {
    return (
        <div className='compEventoDiv'>
            <Navbar />
            <div className='eventoDiv'>
                <div className='eventoHeader'>                
                    <h2>Evento</h2>
                </div>
                <div className='eventoForm'>
                    <table className='eventoTable'>
                        <tr>
                            <th>Nome</th><th>Local</th><th>Data</th>
                        </tr>
                        <tr>
                            <td>Python</td><td>Crato</td><td>01/01/2022</td>
                        </tr>
                        <tr>
                            <td>Javascript</td><td>Crato</td><td>01/01/2022</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}