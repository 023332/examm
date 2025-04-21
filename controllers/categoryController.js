import { Category } from '../models/Category.js';
import { Book } from '../models/Book.js';


export const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Category.create({ name });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error adding category', error });
    }
};


export const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving categories', error });
    }
};


export const assignCategoriesToBook = async (req, res) => {
    const { bookId } = req.params;
    const { categoryIds } = req.body;

    try {
        const book = await Book.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.setCategories(categoryIds);
        res.status(200).json({ message: 'Categories assigned to book successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning categories to book', error });
    }
};