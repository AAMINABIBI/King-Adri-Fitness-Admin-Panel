// LoginScreen.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/LoginScreen.css';

function LoginScreen() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      console.log('Form submitted with:', formData);
      setTimeout(() => {
        console.log('Login successful:', formData.email);
        navigate('/dashboard');
        setIsLoading(false);
      }, 1000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      console.error('Login error:', errorMessage);
      setError('Failed to log in. Please try again later.');
      setIsLoading(false);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register-admin');
  };

  return (
    <div className="login-screen-container">
      <div className="login-form-section">
        <div>
          <img src={logo} className="sidebar-logo" alt="King Adri's Fitness App Logo" />
        </div>
        <p className="login-slogan">Managing made delightful. Login now to experience it.</p>
        {error && <p className="error-message">{error}</p>}
        {isLoading && <div className="spinner">Loading...</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              name="rememberMe"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            <label>Remember me</label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="copyright">
          © 2025 King Adri | All Rights Reserved
        </div>
      </div>
      <div className="login-image-section">
        <div className="quote">
          <span className="quote-icon">“</span>
          Discover the power of change and adopt a fresh approach to life.
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;