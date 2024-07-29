import { useState } from 'react'
import './App.css'
import Conversor from './Conversor'
import BuscaCep from './BuscaCep'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Conversor moedaOrigem='USD' moedaDestino='BRL' cor='lightblue' />
      <Conversor moedaOrigem='EUR' moedaDestino='BRL' cor='yellow' />
      <Conversor moedaOrigem='BTC' moedaDestino='BRL' cor='green' />
      <BuscaCep cor="pink" />
    </>
  )
}

export default App
