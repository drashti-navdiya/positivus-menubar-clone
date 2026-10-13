import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../images/logo.png";

const navLinks = [
  { to: "/about", label: "About us" },
  { to: "/services", label: "Services" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const close = () => setOpen(false);

  // Close on Escape or when tapping outside the navbar
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  // Reset when the viewport grows back to desktop width
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1025px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={close}>
          <img src={logo} alt="positivus logo" />
        </Link>

        <button
          type="button"
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <div id="primary-navigation" className={`nav-menu${open ? " open" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={close}>
              {link.label}
            </Link>
          ))}

          <Link to="/contact" className="quote-button" onClick={close}>
            Request a quote
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;