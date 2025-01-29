const express = require('express');
const app = express();
const PORT = 4000;

// Health endpoint
app.get('/health', (req, res) => {
  const status = req.query.status || '200'; // Default to 200 if no status is provided

  switch (status) {
    case '200':
      res.status(200).json({ message: 'Health check passed: 200 OK' });
      break;
    case '500':
      res.status(500).json({ message: 'Health check failed: 500 Internal Server Error' });
      break;
    case '404':
      res.status(404).json({ message: 'Health check failed: 404 Not Found' });
      break;
    case '503':
      res.status(503).json({ message: 'Health check failed: 503 Service Unavailable' });
      break;
    default:
      res.status(400).json({ message: 'Invalid status code requested' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});