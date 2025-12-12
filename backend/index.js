const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
    res.send('Hi!');
});

// POST route for contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact form submission received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // In a real application, you would save this to a database,
    // send an email, etc.
    res.status(200).json({ message: 'Message received successfully!' });
});

app.listen(port, () => {
    console.log(`서버 가동중 -> http://localhost:${port}`);
});