// backend/api/index.js
const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from the backend!' });
});

module.exports.handler = serverless(app);
