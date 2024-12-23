import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <nav>
                <h1>Giveaway Platform</h1>
                <div>
                    <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
                </div>
            </nav>
            <div className="items-list">
                <h2>Available Items</h2>
                <ul>
                    <li>
                        <img src="https://via.placeholder.com/100" alt="Item 1" />
                        <p>Item 1 - Description</p>
                    </li>
                    <li>
                        <img src="https://via.placeholder.com/100" alt="Item 2" />
                        <p>Item 2 - Description</p>
                    </li>
                    <li>
                        <img src="https://via.placeholder.com/100" alt="Item 3" />
                        <p>Item 3 - Description</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Homepage;
