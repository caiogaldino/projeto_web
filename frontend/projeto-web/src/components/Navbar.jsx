import { Link } from "react-router-dom"


import './Navbar.css';
import mainLogo from '../images/Logo.png';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="center">
          <img src={mainLogo} alt="Logo" className="logo" />
          <ul className="navlist">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/register'}>Cadastro</Link></li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar