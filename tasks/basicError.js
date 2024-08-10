const express = require('express');
const app = express();
const port = 3000;
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
});
app.get('/json-response', (req, res) => {
  res.json({ message: 'Hello, world!' });
});
app.get('/error', (req, res, next) => {
  const error = new Error('Something went wrong!');
  error.status = 500;
  next(error); 
});
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(err.status || 500); 
  res.json({ error: err.message || 'Internal Server Error' }); 
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
