const express = require('express');
const routes = require('./routes');

function setupRoutes(app) {
  app.use('/', routes);

  // Add more route configurations here if needed
}

module.exports = setupRoutes;
