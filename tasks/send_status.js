const express = require('express');
const app = express();
const port = 3000;
app.get('/status/:code', (req, res) => {
  const statusCode = parseInt(req.params.code, 10);
  if ([200, 201, 204, 400, 401, 404, 500].includes(statusCode)) {
    res.status(statusCode).json({
      status: statusCode,
      message: `Response with status code ${statusCode}`
    });
  } else {
    res.status(400).json({
      status: 400,
      message: 'Invalid status code'
    });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
