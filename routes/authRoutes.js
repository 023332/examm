import express from 'express';
import { register, login } from '../controllers/authController.js';
import { validateRegistration, validateLogin } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.post('/register', validateRegistration, register);


router.post('/login', validateLogin, login);

export default router;