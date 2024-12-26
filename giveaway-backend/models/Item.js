// Import Mongoose for schema definition
const mongoose = require('mongoose');

// Define the Item schema
const ItemSchema = new mongoose.Schema({
    title: { type: String, required: true }, // title of the item 
    description: { type: String, required: true }, //descritpion of the item
    image: { type: String }, // URL or path to the image
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // user id model
    username: { type: String, required: true }, // user
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

// Export the Item model
module.exports = mongoose.model('Item', ItemSchema);
