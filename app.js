const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

// Route for other pages like algo_solution
app.get('/algo_solution', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/algo_solution.html'));
});

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
