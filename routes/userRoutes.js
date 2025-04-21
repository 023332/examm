import express from 'express';
import { uploadProfilePicture } from '../middlewares/uploadMiddleware.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
import {
  getUserProfile,
  updateUserProfile,
  uploadProfilePicture as uploadPicture,
} from '../controllers/userController.js';

const router = express.Router();

// Get user profile
router.get('/:userId', authenticateUser, getUserProfile);

// Update user profile
router.put('/:userId', authenticateUser, updateUserProfile);

// Upload profile picture
router.post('/:userId/profile-picture', authenticateUser, uploadProfilePicture, uploadPicture);

export default router;