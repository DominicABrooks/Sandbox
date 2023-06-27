const express = require('express');
const app = express();

// Import the route files
const userRoutes = require('./routes/userRoutes');
const serverRoutes = require('./routes/serverRoutes');

// Connect the routes to the app
app.use('/api/user', userRoutes);
app.use('/api/server', serverRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
