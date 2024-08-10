const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: 'Data received',
    data: {
      name: name,
      age: age
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
