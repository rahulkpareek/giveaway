import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';

const App = () => {
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                {!isLoggedIn ? (
                    <>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </>
                ) : (
                    <Route path="/dashboard" element={<Dashboard />} />
                )}
            </Routes>
        </Router>
    );
};

export default App;
