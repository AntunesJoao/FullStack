import React from 'react'
import Logo from '../img/logo.png'
import "./Nav.css"
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className="img-container">
            <Link to="/">
                <img src={Logo} alt="Logo da empresa" />
            </Link>
        </div>
        <ul>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/chamados">
                <li>Visualizar</li>
            </Link>
        </ul>
    </div>
  )
}

export default Nav
