import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <Link to="/" className="logo-text">Zip Task</Link>
        </div>
        <div className="nav-links">
          <Link to="/why">WHY ZIP TASK</Link>
          <Link to="/features">FEATURES</Link>
          <Link to="/plans">PLANS</Link>
          <Link to="/form">FORM</Link>
        </div>
      </div>
      <div className="nav-right">
        <Link to="/help">Help</Link>
        <Link to="/login" className="nav-login-btn">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar; 