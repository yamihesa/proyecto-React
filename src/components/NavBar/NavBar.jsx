import React from 'react'
import Logo from '../../Imagenes/Logo.png'
import './navBar.css'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    
    <div className='nav_bar'>
      <a href='.#'>
        <div className='logo'>
            <img src={Logo} className='logo_img' alt=''/>
        </div>
      </a>
    <ul>
        <li>
            <a href='.#'>Inicio</a>
        </li>
        <li>
            <a href='.#'>Talleres</a>
        </li>
        <li>
            <a href='.#'>Terapias</a>
        </li>
        <li>
            <a href='.#'>Tienda</a>
        </li>
        <li>
            <a href='.#'>Contacto</a>
        </li>
    </ul>
    <CartWidget/>
    </div>
    
  )
}

export default NavBar
