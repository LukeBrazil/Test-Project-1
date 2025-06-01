import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
    console.log('Logging in with:', { username, password });
    // Add your actual login logic here
    // For example, call an API endpoint
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
    // Add your Google login logic here
    // For example, redirect to Google OAuth
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2>Log In to Zip Task</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username or email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn primary">
            Log In
          </button>
        </form>
        <div className="or-divider">
          <span>OR</span>
        </div>
        <button onClick={handleGoogleLogin} className="login-btn google">
          <img src="/google-logo.svg" alt="Google logo" className="google-icon" />
          Log In with Google
        </button>
        <div className="login-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <span>•</span>
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 