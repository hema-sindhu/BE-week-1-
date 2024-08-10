const express = require('express');
const compression = require('compression');
const app = express();
app.use(compression());
app.get('/', (req, res) => {
    res.send('Hello, World! This response is compressed!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
