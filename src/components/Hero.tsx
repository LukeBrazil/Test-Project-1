import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Accomplish more with better tasks</h1>
        <p>Zip Task helps you capture tasks and get them done fast.</p>
        <Link to="/login" className="signup-btn">
          Sign up for free
        </Link>
        
      </div>
      <div className="hero-image">
        <img 
          src="/hero-image.svg" 
          alt="Zip Task app interface showing task management"
          className="app-preview"
        />
      </div>
      <div className="features-preview">
        <div className="feature">
          <h3>WORK ANYWHERE</h3>
          <p>Keep important tasks handy by syncing your tasks to all your devices.</p>
        </div>
        <div className="feature">
          <h3>CAPTURE WHAT MATTERS</h3>
          <p>Add tasks, subtasks, reminders, and priority levels to stay organized.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero; 