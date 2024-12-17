import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Read from './components/Read'
import Create from './components/Create'

function App() {

    return (
        <>
            <h1>Sistema de gerenciamento de times</h1>
            <Read />
            <Create />
        </>
    )
}

export default App
