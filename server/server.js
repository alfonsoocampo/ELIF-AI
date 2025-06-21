const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  console.log(req.body);
  res.json({ success: true, message: 'Data received' });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});