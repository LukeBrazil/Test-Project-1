import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <span className="logo-text">Zip Task</span>
        </div>
        <div className="nav-links">
          <a href="#why">WHY ZIP TASK</a>
          <a href="#features">FEATURES</a>
          <a href="#plans">PLANS</a>
        </div>
      </div>
      <div className="nav-right">
        <a href="#help">Help</a>
        <a href="#login">Log In</a>
        <button className="download-btn">Download</button>
      </div>
    </nav>
  );
};

export default Navbar; 