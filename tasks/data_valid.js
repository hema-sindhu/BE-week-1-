const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());
app.post('/register', [
    body('username').isAlphanumeric().withMessage('Username must be alphanumeric').trim().escape(),
    body('email').isEmail().withMessage('Please enter a valid email address').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('User registered successfully!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
