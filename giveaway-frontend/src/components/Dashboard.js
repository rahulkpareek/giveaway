import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [user, setUser] = useState({ username: 'John Doe', email: 'john@example.com' });
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch items from the backend
        const fetchItems = async () => {
            // Replace with your API call
            setItems([
                { id: 1, title: 'Item 1', description: 'Description for item 1' },
                { id: 2, title: 'Item 2', description: 'Description for item 2' },
            ]);
        };
        fetchItems();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, padding: '1rem', borderRight: '1px solid #ddd' }}>
                <h3>Profile</h3>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div style={{ flex: 3, padding: '1rem' }}>
                <h3>Available Items</h3>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
