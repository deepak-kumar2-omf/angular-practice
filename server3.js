const express = require('express');
const path = require('path');
const app = express();

// Serve static files (like images, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ex3.html'));
});

// Start the server on port 4200
app.listen(4200, () => {
    console.log('Server is running at http://localhost:4200');
});