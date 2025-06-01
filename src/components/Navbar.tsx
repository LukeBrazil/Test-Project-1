import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" className="logo-text" onClick={() => setIsMenuOpen(false)}>Zip Task</Link>
        </div>

        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <Link to="/why" onClick={() => setIsMenuOpen(false)}>WHY ZIP TASK</Link>
            <Link to="/features" onClick={() => setIsMenuOpen(false)}>FEATURES</Link>
            <Link to="/plans" onClick={() => setIsMenuOpen(false)}>PLANS</Link>
            <Link to="/form" onClick={() => setIsMenuOpen(false)}>FORM</Link>
          </div>
          <div className="nav-right">
            <Link to="/help" onClick={() => setIsMenuOpen(false)}>Help</Link>
            <Link to="/login" className="nav-login-btn" onClick={() => setIsMenuOpen(false)}>Log In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 