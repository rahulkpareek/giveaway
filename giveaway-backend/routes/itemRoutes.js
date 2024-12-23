// Import required modules
const express = require('express');
const Item = require('../models/Item');
const { protect } = require('../middleware/authMiddleware'); // Middleware for authentication

const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find().populate('user', 'name email'); // Populate user details
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new item
router.post('/', protect, async (req, res) => {
    const { name, description, image } = req.body;
    try {
        const item = await Item.create({
            name,
            description,
            image,
            user: req.user.id,
        });
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

