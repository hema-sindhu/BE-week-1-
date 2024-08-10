const express = require('express');
const app = express();
const port = 3000;
app.get('/api/data', (req, res) => {
  const jsonResponse = {
    message: 'Hello, world!',
    data: {
      id: 1,
      name: 'Sample Item'
    }
  };
  res.json(jsonResponse);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
