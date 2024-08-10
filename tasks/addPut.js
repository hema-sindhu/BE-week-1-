const express = require('express');
const app = express();
app.use(express.json());
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
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`User ID: ${id}`);
});
app.put('/update', (req, res) => {
  const data = req.body; 
  console.log('Received data for update:', data);
  res.send('Data updated');
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
