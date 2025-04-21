import { Book } from '../models/Book.js';
import { Category } from '../models/Category.js';
import { Favorite } from '../models/Favorite.js';
import { Review } from '../models/Review.js';


export const addBook = async (req, res) => {
    try {
        const { title, author, description } = req.body;
        const newBook = await Book.create({ title, author, description });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Error adding book', error });
    }
};


export const updateBook = async (req, res) => {
    try {
        const { bookId } = req.params;
        const { title, author, description } = req.body;
        const updatedBook = await Book.update({ title, author, description }, { where: { id: bookId } });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Error updating book', error });
    }
};


export const getBookDetails = async (req, res) => {
    try {
        const { bookId } = req.params;
        const book = await Book.findByPk(bookId, {
            include: [{ model: Review }, { model: Favorite }]
        });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving book details', error });
    }
};


export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving books', error });
    }
};


export const assignCategoriesToBook = async (req, res) => {
    Book.setCategories = async function (categories) {

    };
    try {
        const { bookId } = req.params;
        const { categoryIds } = req.body;
        const book = await Book.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const categories = await Category.findAll({ where: { id: categoryIds } });
        await book.setCategories(categories);
        res.status(200).json({ message: 'Categories assigned successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning categories', error });
    }
};

export class getBooks {
}

export class getBookById {
}

export class deleteBook {
}

