// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Load routes
app.use('/api/users', require('./routes/userRoutes')); // User-related APIs
app.use('/api/items', require('./routes/itemRoutes')); // Item-related APIs

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

