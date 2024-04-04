import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Conversor moedaOrigem='USD' moedaDestino='BRL' cor='lightblue' />
      <Conversor moedaOrigem='EUR' moedaDestino='BRL' cor='yellow' />
    </>
  )
}

export default App
