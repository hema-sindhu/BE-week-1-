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
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
