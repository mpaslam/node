const axios = require('axios');

// GET all books
axios.get('http://localhost:3000/api/books')
    .then(response => {
        console.log('All Books:', response.data);
    })
    .catch(error => {
        console.error('Error fetching all books:', error);
    });

// GET a specific book by ID
axios.get('http://localhost:3000/api/books/1')
    .then(response => {
        console.log('Book with ID 1:', response.data);
    })
    .catch(error => {
        console.error('Error fetching book with ID 1:', error);
    });

// POST a new book
axios.post('http://localhost:3000/api/books', {
        title: 'New Book',
        author: 'New Author'
    })
    .then(response => {
        console.log('New Book added:', response.data);
    })
    .catch(error => {
        console.error('Error adding new book:', error);
    });

// PUT update a book by ID
axios.put('http://localhost:3000/api/books/1', {
        title: 'Updated Book',
        author: 'Updated Author'
    })
    .then(response => {
        console.log('Book with ID 1 updated:', response.data);
    })
    .catch(error => {
        console.error('Error updating book with ID 1:', error);
    });

// DELETE a book by ID
axios.delete('http://localhost:3000/api/books/1')
    .then(() => {
        console.log('Book with ID 1 deleted');
    })
    .catch(error => {
        console.error('Error deleting book with ID 1:', error);
    });
