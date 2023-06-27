const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
  // Add server logic here
  res.send('Server added successfully');
});

module.exports = router;
