import express from 'express';
import { getAllUsers, deleteUser, deleteReview } from '../controllers/adminController.js';
import { isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.get('/users', isAdmin, getAllUsers);


router.delete('/users/:userId', isAdmin, deleteUser);


router.delete('/reviews/:reviewId', isAdmin, deleteReview);

export default router;