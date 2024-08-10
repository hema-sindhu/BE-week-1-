const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource could not be found.'
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

