import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>  
                <li>
                    <Link to="/aluno">Aluno</Link>
                </li>               
                <li>
                    <Link to="/grupo">Grupo</Link>
                </li>
                <li>
                    <Link to="/logout">Sair</Link>
                </li>
            </ul>
        </nav>
    )
}