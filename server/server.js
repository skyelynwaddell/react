const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Sample endpoint to handle POST requests
app.get('/api/data', (req, res) => {
    const receivedData = req.body;
    console.log(receivedData); // This should log the received data
    res.json({ message: 'Data received successfully', data: receivedData });
});

// Sample endpoint to handle POST requests
app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    console.log(receivedData); // This should log the received data
    res.json({ message: 'Data received successfully', data: receivedData });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
