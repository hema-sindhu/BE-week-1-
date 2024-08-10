const express = require('express');
const app = express();
const port = 3000;
app.get('/redirect-me', (req, res) => {
  // Redirect to a different URL
  res.redirect('https://www.example.com');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
