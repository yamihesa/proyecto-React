import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import Logo from '../../Imagenes/Logo.png'

const NavBar = () => {
  return <div className="nav_bar">
    <Link to={'/Inicio'}>
      <img src={Logo} className='logo_img' alt=''/>
    </Link>
      <div className="nav_bar_ul">
        <ul>
          <li>
            <NavLink className="nav_link"  to={'/category/Varios'}>Varios</NavLink>
          </li>
          <li>
            <NavLink  className="nav_link" to={'/category/Lamparas'}>Lamparas</NavLink>  
          </li>
          <li>
            <NavLink  className="nav_link"  to={'/category/Fuentes'}>Fuentes</NavLink>                       
          </li>
        </ul>
      </div>
        <CartWidget />
      </div>
    

        
    
}


export default NavBar;