// Import required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize express app and configure environment variables
const app = express();
dotenv.config();

// Use CORS to allow cross-origin requests
app.use(cors());

// Define a basic route
app.get('/', (req, res) => {
  res.send('Computer Science Club!');
});

// Start the server and listen on a specific port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});