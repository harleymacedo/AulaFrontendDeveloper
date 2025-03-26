import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {
    return (
        <nav className="navbar">                            
            <button>
                <Link to="/aluno">Aluno</Link>
            </button>               
            <button>
                <Link to="/grupo">Grupo</Link>
            </button>
            <button>
                <Link to="/evento">Evento</Link>
            </button>
            <button>
                <Link to="/">Sair</Link>
            </button>            
        </nav>
    )
}