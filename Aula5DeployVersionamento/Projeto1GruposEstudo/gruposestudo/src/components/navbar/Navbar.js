import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' // Optional: If you want to add styles for the Navbar

export default function Navbar () {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Aluno</Link>
                </li>               
                <li>
                    <Link to="/about">Grupo</Link>
                </li>
                <li>
                    <Link to="/contact">Sair</Link>
                </li>
            </ul>
        </nav>
    )
}