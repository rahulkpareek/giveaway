

module.exports.validateRegistration = (req, res, next) => {
    const { username, email, password } = req.body;

    // Check if all required fields are present
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validate password strength (optional)
    if (password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    next(); // Proceed to the next middleware or route handler
};

module.exports.validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    // Check if all required fields are present
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and Password are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    next(); // Proceed to the next middleware or route handler
};
