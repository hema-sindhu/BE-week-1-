const express = require('express');
const app = express();
const port = 3000;
app.get('/json-response', (req, res) => {
  res.json({ message: 'Hello, world!' });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
