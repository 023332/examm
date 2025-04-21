import express from 'express';
import { addCategory, getCategories, assignCategoriesToBook } from '../controllers/categoryController.js';
import {  adminMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.post('/', adminMiddleware, addCategory);


router.get('/', getCategories);


router.post('/:bookId/categories', adminMiddleware, assignCategoriesToBook);

export default router;