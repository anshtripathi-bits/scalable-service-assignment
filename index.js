const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Welcome to microservices endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to the Scalable Service Assignment Microservice! Created by Ansh Tripathi.",
        timestamp: new Date()
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Microservice is running successfully"
    });
});

// Greeting endpoint
app.get('/greet', (req, res) => {
    const name = req.query.name || "Guest";
    res.status(200).json({
        message: `Hello ${name}!`,
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});