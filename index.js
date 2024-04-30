// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
const port = 3000;

// Configure middleware to parse JSON
app.use(bodyParser.json());

// Sample data (can be replaced with database)
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
];

// Define routes
app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (!book) {
        res.status(404).send('Book not found');
    } else {
        res.json(book);
    }
});

app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).send('Book added successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
