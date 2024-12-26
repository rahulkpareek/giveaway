import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'; 
import axios from 'axios';

const Dashboard = () => {
    const [items, setItems] = useState([]);
    const [username, setUsername] = useState(''); 
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in by verifying the token
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirect to login if not authenticated
        } else {
            // Fetch user profile
            axios
                .get('http://localhost:5000/api/users/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setUsername(response.data.username); // Set username from response
                })
                .catch((error) => {
                    console.error('Error fetching user profile:', error);
                });

            // Fetch user items
            axios
                .get('http://localhost:5000/api/items/my-items', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setItems(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching items:', error);
                });
        }
    }, [navigate]);

    return (
        <div className="homepage-container">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo-text">Giveaway Dashboard</div>
                </div>
                <div className="nav-links">
                    <button
                        onClick={() => {
                            localStorage.removeItem('token');
                            navigate('/login');
                        }}
                        className="nav-link"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <div className="dashboard-content">
                {/* Left Pane: User Profile */}
                <div className="profile-pane">
                    <h2 className="profile-title">User Profile</h2>
                    <p className="profile-username">{username}</p>
                </div>

                {/* Main Content: Items List */}
                <div className="main-content">
                    <header className="header">
                        <h1>Your Items</h1>
                        <p>Below are the items you've shared.</p>
                        <button
                            className="add-item-button"
                            onClick={() => navigate('/new-item')}
                        >
                            Add New Item
                        </button>
                    </header>

                    <div className="items-list">
                        {items.length > 0 ? (
                            <ul className="items-grid">
                                {items.map((item) => (
                                    <li key={item._id} className="item-card">
                                        <img
                                            src={item.image || 'https://via.placeholder.com/150'}
                                            alt={item.title}
                                            className="item-image"
                                        />
                                        <h3>{item.title}</h3>
                                        <p className="item-description">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No items found. Add some items to get started!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
