import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Homepage.css'; // Reuse your existing CSS for styling

const NewItem = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate(); // Used to redirect after successful adding a new item

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);

        const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage

        if (!token) {
            setError('You must be logged in to add a new item.');
            return;
        }

        try {
            await axios.post(
                'http://localhost:5000/api/items',
                { title, description, image },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            
            setMessage('Item created successfully! Redirecting...');
            setTitle('');
            setDescription('');
            setImage('');
        
            setTimeout(() => navigate('/dashboard'), 2000); // Redirect to all listed items

        } catch (err) {
            const errorMessage = err.response?.data?.error || 'An error occurred while creating the item.';
            setError(errorMessage);
        }
    };

    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="form-header">Add a New Item</h2>

                {message && <div className="success-message">{message}</div>}
                {error && <div className="error-text">{error}</div>}

                <label className="form-label" htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    className="form-input"
                    placeholder="Enter item title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label className="form-label" htmlFor="description">Description</label>
                <textarea
                    id="description"
                    className="form-input"
                    placeholder="Enter item description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows="4"
                ></textarea>

                <label className="form-label" htmlFor="image">Image URL (optional)</label>
                <input
                    type="text"
                    id="image"
                    className="form-input"
                    placeholder="Enter image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <button type="submit" className="form-button">Add Item</button>
            </form>
        </div>
    );
};

export default NewItem;
