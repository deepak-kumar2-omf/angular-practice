const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'images' folder
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ex3.html')); // Serve your HTML file
});

app.listen(4200, () => {
  console.log('Server running at http://localhost:4200/');
});