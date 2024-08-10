const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: "Too many requests from this IP, please try again after 15 minutes."
});
app.use(limiter);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
