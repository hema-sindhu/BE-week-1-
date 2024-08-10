const express = require('express');
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});
app.get('/goodbye', (req, res) => {
  res.send('Goodbye, Express!');
});
app.post('/echo', (req, res) => {
  res.json(req.body);
});
app.get('/greet/:name', (req, res) => {
  const name = req.params.name; 
  res.send(`Hello, ${name}!`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
