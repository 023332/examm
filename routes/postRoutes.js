import express from 'express';
import postController from '../controllers/userController';


const router = express.Router();

router.get('/', postController.getAllPosts); // Get all posts
router.post('/', postController.createPost); // Create a new post
router.get('/:id', postController.getPostById); // Get a post by ID
router.put('/:id', postController.updatePost); // Update a post by ID
router.delete('/:id', postController.deletePost); // Delete a post by ID

module.exports = router;