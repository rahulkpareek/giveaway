// Import required modules
const express = require('express');
const Item = require('../models/Item');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Get all items for the logged-in user
router.get('/my-items', protect, async (req, res) => {
    try {
        const items = await Item.find({ user: req.user._id }); // Fetch items belonging to the logged-in user
        res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching user items:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Create a new item
router.post('/', protect, async (req, res) => {
    try {
        const { title, description, image } = req.body;

        // Create and save the item
        const newItem = new Item({
            title,
            description,
            image,
            user: req.user._id, 
            username: req.user.username, 
        });

        await newItem.save();
        res.status(201).json({ message: 'Item created successfully', item: newItem });
    } catch (error) {
        console.error('Error creating item:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
