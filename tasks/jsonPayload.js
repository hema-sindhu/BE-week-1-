const express = require('express');
const app = express();
app.use(express.json());
app.post('/submit', (req, res) => {
  const data = req.body; 
  console.log('Received JSON data:', data);
  res.json({
    message: 'Data received successfully!',
    receivedData: data
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
