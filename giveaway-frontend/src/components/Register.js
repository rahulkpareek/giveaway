import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../api/api';
import './Homepage.css'; // Reuse the CSS for consistent styling
import logo from './logo.png';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const response = await registerUser(formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.error || 'Something went wrong');
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
                <h1>Join Us!</h1>
                <p>Create an account to start giving and receiving items.</p>
            </header>

            <div className="form-container">
                <form onSubmit={handleSubmit} className="register-form">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error-text">{errors.username}</p>}

                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}

                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}

                    <button type="submit" className="form-button">Register</button>
                </form>
                {message && <p className="success-message">{message}</p>}
            </div>
        </div>
    );
};

export default Register;
