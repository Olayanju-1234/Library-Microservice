const Book = require('../model/Book')
const express = require("express")
const router = express.Router()


// create new book
router.post('/create', async (req, res) => {
    const newBook =  new Book(req.body)

    try {
        const savedBook = await newBook.save()
        res.status(200).json(savedBook)
    } catch (err) {
        res.status(500).json(err)
        
    }
})

// get all books
router.get('/find', async (req, res) => {
    try {
        const allBooks = await Book.find()
        res.status(200).json(allBooks)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get one book
router.get('/book/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        // Check if book exists
        if (!book) {
            res.status(404).json("Book not found")
        }
        else{
            res.status(200).json(book)
        }
        
        
    } catch (err) {
        res.status(500).json(err)
        
    }
})

// delete a book
router.delete('/delete/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json("Book deleted")
    } catch (error) {
        res.send(500).json(error)
    }
})

module.exports = router