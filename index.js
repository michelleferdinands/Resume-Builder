require('dotenv').config();  // Loads environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;  // Use the port from .env or default to 5000

// Middleware
app.use(express.json());  // To parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Basic route to verify server is running
app.get('/', (req, res) => {
  res.send('Hello, world! Server is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});