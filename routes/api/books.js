const express = require('express');
const router = express.Router();

// Load the book model
const Book = require('../../models/Book');

// @route  - GET api/books/test
// @ desc  - Tests book route
// @access - Public
router.get('/test', (req, res) => res.send('Book route testing'));

// @route  - GET api/books
// @ desc  - Get all books
// @access - Public
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'No books found' }));
});

// @route  - GET api/books/:id
// @ desc  - Get single book by id
// @access - Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route  - GET api/books
// @ desc  - Add or save book
// @access - Public
router.post('/',  (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: 'Book added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this book' }))
});

// @route  - GET api/books/:id
// @ desc  - Update book
// @access - Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to update the database' }));
});

// @route  - GET api/books/:id
// @ desc  - Delete book by id
// @access - Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ msg: 'Book entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'Book does not exist' }));
});

module.exports = router;