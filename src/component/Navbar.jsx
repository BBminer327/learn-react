import React from 'react'
import '../assets/index.css'
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <nav className="navbar text-white w-3xs h-screen bg-blue-500 fixed top-0 left-0">
            <div className="logo p-5 text-center text-3xl">React Router</div>
            <ul className="nav-links px-6">
                <li className='py-3'><Link to="/home">Home</Link></li>
                <li className='py-3'><Link to="/about">About</Link></li>
                <li className='py-3'><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
