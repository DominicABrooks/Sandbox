const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
  // Add user logic here
  res.send('User added successfully');
});

router.delete('/delete', (req, res) => {
  // Delete user logic here
  res.send('User deleted successfully');
});

module.exports = router;