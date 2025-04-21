import express from 'express';
import { submitComment, getComments } from '../controllers/commentController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to submit a comment on a review
router.post('/reviews/:reviewId/comments', authenticateUser, submitComment);

// Route to retrieve all comments for a specific review
router.get('/reviews/:reviewId/comments', getComments);

export default router;