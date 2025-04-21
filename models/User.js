import { DataTypes } from 'sequelize';
import sequelize from '../utils/db.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,
});

// Associations
User.associate = (models) => {
    User.hasMany(models.Favorite, {
        foreignKey: 'userId',
        as: 'favorites',
    });
    User.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'comments',
    });
    User.hasMany(models.Review, {
        foreignKey: 'userId',
        as: 'reviews',
    });
};

export default User;

export class User {
}