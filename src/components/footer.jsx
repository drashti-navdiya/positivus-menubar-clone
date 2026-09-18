import "./footer.css";

import { Link } from "react-router-dom";

import logo2 from "../images/logo2.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-top">

          <div className="footer-logo">
            <img src={logo2} alt="Positivus logo" />
          </div>

          <nav className="footer-nav">
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/use-cases">Use Cases</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
          </nav>

          <div className="footer-social">

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebook} alt="Facebook" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img src={twitter} alt="Twitter" />
            </a>

          </div>

        </div>

        <div className="footer-middle">

          <div className="footer-contact">

            <h3>Contact us:</h3>

            <p>
              <strong>Email:</strong> info@positivus.com
            </p>

            <p>
              <strong>Phone:</strong> 555-567-8901
            </p>

            <p>
              <strong>Address:</strong> 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>

          </div>

          <form className="footer-newsletter">

            <input
              type="email"
              placeholder="Email"
              required
            />

            <button type="button">
              Subscribe to news
            </button>

          </form>

        </div>

        <div className="footer-bottom">

          <p>
            © 2023 Positivus. All Rights Reserved.
          </p>

          <a href="#">
            Privacy Policy
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;