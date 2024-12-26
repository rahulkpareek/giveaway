import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api'; // Ensure this API function is implemented
import './Homepage.css'; // Reuse the CSS from Homepage for consistent styling
import logo from './logo.png'; // Import your logo image

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Used to redirect after successful login

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        try {
            // Call API to log in
            const response = await loginUser(formData);

            // Save token in local storage
            localStorage.setItem('token', response.data.token);

            // Set success message and redirect
            setMessage('Login successful! Redirecting...');
            setTimeout(() => navigate('/dashboard'), 2000); // Redirect to all listed items
        } catch (err) {
            // Handle errors
            setError(err.response?.data?.error || 'Something went wrong');
        }
    };

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
                <form onSubmit={handleSubmit} className="login-form">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="form-button">Login</button>
                </form>
                {error && <p className="error-text">{error}</p>}
                {message && <p className="success-message">{message}</p>}
            </div>
        </div>
    );
};

export default Login;
