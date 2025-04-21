import { User, Review } from '../models.js';


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};


export const deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.destroy({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};


export const deleteReview = async (req, res) => {
    const { reviewId } = req.params;
    try {
        const review = await Review.destroy({ where: { id: reviewId } });
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error });
    }
};