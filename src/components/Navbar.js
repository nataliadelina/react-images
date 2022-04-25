import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" className="nav-link" activeclassname="active-link">home</NavLink>
            <NavLink to="/work" className="nav-link" activeclassname="active-link">work</NavLink>
            <NavLink to="/about" className="nav-link" activeclassname="active-link">about</NavLink>
            <NavLink to="/contact" className="nav-link" activeclassname="active-link">contact</NavLink>
        </nav>
    )
}
