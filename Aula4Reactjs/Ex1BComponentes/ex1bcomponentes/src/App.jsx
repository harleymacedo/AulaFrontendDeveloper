
import './App.css'
import Conversor from './components/Conversor'

function App() {

    return (
        <>
            <h1>App de conversores</h1>
            <Conversor info="Dólar para Real" />
            <Conversor info="Yuan para Real" />
            <Conversor info="Peso para Real" />
        </>
    )
}

export default App
