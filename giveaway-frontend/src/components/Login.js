import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Reuse the CSS from Homepage for consistent styling
import logo from './logo.png'; // Import your logo image

const Login = () => {
    return (
        <div className="homepage-container">
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo-image" />
                    <div className="logo-text">Giveaway Platform</div>
                </div>
                <div className="nav-links">
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                </div>
            </nav>

            <header className="header">
                <h1>Welcome Back!</h1>
                <p>Please login to continue</p>
            </header>

            <div className="form-container">
                <form className="login-form">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Enter your email"
                        required
                    />

                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Enter your password"
                        required
                    />

                    <button type="submit" className="form-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
