import { Link } from "react-router-dom"
import Logout from "../routes/Logout";

import './Navbar.css';
import mainLogo from '../images/Logo.png';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="center">
          <Link to={'/'}>
            <img src={mainLogo} alt="Logo" className="logo"></img>
          </Link>

          

          <ul className="navlist">
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/reservas'}>Reserve sua moto</Link></li>
            <li><Link to={'/register'}>Cadastre-se</Link></li>
            <li onClick={Logout}><Link to={'/logout'}>Sair</Link></li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar