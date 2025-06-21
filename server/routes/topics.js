const express = require('express');
const router = express.Router();

// Test route
router.get('/', (req, res) => {
  res.json({ message: 'Topics route is working!' });
}); // reaches path root/topics

router.post('/response', (req, res) => {
  console.log(req.body);
  res.json({ success: true, message: 'Response received' });
}); // reaches path root/topics/response

