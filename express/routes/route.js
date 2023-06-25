const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Add more routes here if needed

module.exports = router;