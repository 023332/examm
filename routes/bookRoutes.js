import express from 'express';
import { 
    addBook, 
    getBooks, 
    getBookById, 
    updateBook, 
    deleteBook 
} from '../controllers/bookController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { uploadMiddleware } from '../middlewares/uploadMiddleware.js';

const router = express.Router();


router.post('/', authMiddleware, uploadMiddleware.single('cover'), addBook);


router.get('/', getBooks);

router.get('/:bookId', getBookById);

// Route to update a book
router.put('/:bookId', authMiddleware, uploadMiddleware.single('cover'), updateBook);

// Route to delete a book
router.delete('/:bookId', authMiddleware, deleteBook);

export default router;