import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Include CSS for styling
import logo from './logo.png'; // Import your logo image
import Login from './Login';
import Register from './Register';


const Homepage = () => {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Sample items for display
    const items = [
        { id: 1, image: 'https://via.placeholder.com/150', description: 'Item 1 - Description' },
        { id: 2, image: 'https://via.placeholder.com/150', description: 'Item 2 - Description' },
        { id: 3, image: 'https://via.placeholder.com/150', description: 'Item 3 - Description' },
        { id: 4, image: 'https://via.placeholder.com/150', description: 'Item 4 - Description' },
        { id: 5, image: 'https://via.placeholder.com/150', description: 'Item 5 - Description' },
    ];

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="homepage-container">
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo-image" />
                <div className="logo">Giveaway</div>
                <div className="nav-links">
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                </div>
            </nav>

            <header className="header">
                <h1>Post or Find Items for Give Away or exchange!</h1>
            </header>

            <div className="items-list">
                <h2>Available Items</h2>
                <ul className="items-grid">
                    {currentItems.map((item) => (
                        <li key={item.id} className="item-card">
                            <img src={item.image} alt={item.description} className="item-image" />
                            <p className="item-description">{item.description}</p>
                        </li>
                    ))}
                </ul>

                <div className="pagination">
                    <button onClick={handlePrevious} disabled={currentPage === 1} className="pagination-button">Previous</button>
                    <span className="page-info">Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNext} disabled={currentPage === totalPages} className="pagination-button">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
