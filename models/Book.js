import { DataTypes } from 'sequelize';
import sequelize from '../utils/db.js';

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    coverImageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    publicationDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
}, {
    timestamps: true,
});

// Associations
Book.associate = (models) => {
    Book.hasMany(models.Review, {
        foreignKey: 'bookId',
        as: 'reviews',
    });
    Book.hasMany(models.Favorite, {
        foreignKey: 'bookId',
        as: 'favorites',
    });
    Book.belongsToMany(models.Category, {
        through: 'BookCategory',
        foreignKey: 'bookId',
        as: 'categories',
    });
};


export default Book;

