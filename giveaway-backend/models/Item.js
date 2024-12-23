// Import Mongoose for schema definition
const mongoose = require('mongoose');

// Define the Item schema
const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

// Export the Item model
module.exports = mongoose.model('Item', ItemSchema);
