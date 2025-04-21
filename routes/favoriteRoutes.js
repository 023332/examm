import express from 'express';
import { markAsFavorite, getUserFavorites } from '../controllers/favoriteController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.post('/books/:bookId/favorite', authenticateUser, markAsFavorite);


router.get('/users/:userId/favorites', authenticateUser, getUserFavorites);

export default router;