// Import required modules
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { validateRegistration, validateLogin } = require('../middleware/validateInput');
const generateToken = require('../utils/generateToken');

const router = express.Router();

//Register a new user
router.post('/register', validateRegistration, async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ error: 'Username or Email already exists' });
        }

        // Create and save the new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // Generate a JWT token using the utility
        const token = generateToken(newUser._id, newUser.username);

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: { email: newUser.email, username: newUser.username },
        });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ error: 'Server register error' });
    }
});

// Login
router.post('/login', validateLogin, async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Generate a JWT token using the utility
        const token = generateToken(user._id, user.username);

        res.status(200).json({
            message: 'Login successful',
            token,
            user: { email: user.email, username: user.username },
        });
    } catch (error) {
        console.error('Error logging in:', error.message);
        res.status(500).json({ error: 'Server login error' });
    }
});


module.exports = router;
