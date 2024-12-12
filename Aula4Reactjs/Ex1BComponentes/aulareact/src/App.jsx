import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Post' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Post cor="silver" titulo="Foto do FDS" foto="Foto praia" curtidas="0" />
        <Post cor="yellow" titulo="Foto confra" foto="Confra" curtidas="10"/>
      </div>
      <p className="read-the-docs">
        Harley 
      </p>
    </>
  )
}

export default App
