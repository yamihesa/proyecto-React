import "./navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from '../../Imagenes/Logo.png'

const NavBar = () => {
  return (
    <div className="nav_bar">        
        <div className='logo'><Link to='/'>
            <img src={Logo} className='logo_img' alt=''/>
            </Link>
        </div>
      
      <ul>
        <li>
          <Link to="/Inicio">Inicio</Link>
        </li>
        <li>
          <Link to="/Talleres">Talleres</Link>
        </li>
        <li>
          <Link to="/Terapias">Terapias</Link>
        </li>
        <li>
          <Link to="/Products">Productos</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
