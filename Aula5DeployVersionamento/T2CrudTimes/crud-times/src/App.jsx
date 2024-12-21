import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'

function App() {

    return (
        <>
            <h1>Sistema de gerenciamento de times</h1>
            <Create />
            <Read />
            <Update />
            <Delete />
        </>
    )
}

export default App
