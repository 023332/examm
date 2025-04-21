import { Favorite } from '../models/Favorite.js';
import { Book } from '../models/Book.js';



export const markAsFavorite = async (req, res) => {
    const { userId } = req.user;
    const { bookId } = req.params;

    try {
        const book = await Book.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const favorite = await Favorite.create({ userId, bookId });
        return res.status(201).json(favorite);
    } catch (error) {
        return res.status(500).json({ message: 'Error marking book as favorite', error });
    }
};


export const getUserFavorites = async (req, res) => {
    const { userId } = req.params;

    try {
        const favorites = await Favorite.findAll({
            where: { userId },
            include: [{ model: Book }],
        });

        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving favorite books', error });
    }
};