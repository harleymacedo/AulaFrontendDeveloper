import './App.css'
import Post from './components/Post'
import { useState } from 'react'

function App() {

    const [totalPontos, setTotalPontos] = useState(0)

    function somarPontosTotais() {
        setTotalPontos(totalPontos + 1)
    }
    function subtrairPontosTotais() {
        if (totalPontos > 0) {
            setTotalPontos(totalPontos - 1)
        }
    }

    return (
        <div className="App">
            <h1>Total: {totalPontos} </h1>
            <Post 
                pensamento='Pensamento A' 
                cor='silver' 
                somarTotais={somarPontosTotais} 
                subtrairTotais={subtrairPontosTotais} 
            />
            <Post 
                pensamento='Pensamento B' 
                cor='yellow' 
                somarTotais={somarPontosTotais} 
                subtrairTotais={subtrairPontosTotais} 
            />
            <Post 
                pensamento='Pensamento C' 
                cor='pink' 
                somarTotais={somarPontosTotais} 
                subtrairTotais={subtrairPontosTotais} 
            />
            <Post 
                pensamento='Pensamento D' 
                cor='gray' 
                somarTotais={somarPontosTotais} 
                subtrairTotais={subtrairPontosTotais} 
            />
        </div>
    )
}

export default App
