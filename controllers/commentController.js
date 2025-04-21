import { Comment } from '../models/Comment';
import { Review } from '../models/Review';
import { User } from '../models/User';


export const submitComment = async (req, res) => {
    const { reviewId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;

    try {
        const review = await Review.findByPk(reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        const comment = await Comment.create({
            content,
            reviewId,
            userId
        });

        return res.status(201).json(comment);
    } catch (error) {
        return res.status(500).json({ message: 'Error submitting comment', error });
    }
};


export const getCommentsForReview = async (req, res) => {
    const { reviewId } = req.params;

    try {
        const comments = await Comment.findAll({
            where: { reviewId },
            include: [{ model: User, attributes: ['id', 'username'] }]
        });

        return res.status(200).json(comments);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving comments', error });
    }
};

export class getComments {
}