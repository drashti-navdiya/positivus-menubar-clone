import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../images/logo.png"


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        
        <Link to="/" className="logo">
          <img src={logo} alt="positivus logo" />
        </Link>

        
        <div className="nav-menu">
          <Link to="/about">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/use-cases">Use Cases</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>

          <Link to="/contact" className="quote-button">
            Request a quote
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;