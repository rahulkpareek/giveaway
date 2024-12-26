const jwt = require('jsonwebtoken');

// Function to generate JWT
const generateToken = (id, username) => {
    return jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = generateToken;
