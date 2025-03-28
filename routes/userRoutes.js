import express from 'express';
import userController  from '../controllers/userController';
import { validateUser } from '../middlewares/validate';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

// Route for user registration
router.post('/register', validateUser, userController.registerUser);

// Route for user login
router.post('/login', userController.loginUser);

// Route for getting user profile
router.get('/profile', authenticate, userController.getUserProfile);

// Route for updating user profile
router.put('/profile', authenticate, validateUser, userController.updateUserProfile);

// Route for deleting user account
router.delete('/profile', authenticate, userController.deleteUserAccount);

module.exports = router;