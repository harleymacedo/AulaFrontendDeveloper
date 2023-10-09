
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import Navegacao from './Navegacao'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navegacao />
                <Button variant='primary'>Exemplo 1</Button>
                <Button variant='warning'>Exemplo 2</Button>
                <Form.Range />
            </header>
        </div>
    )
}

export default App
