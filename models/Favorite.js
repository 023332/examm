import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/db.js';
import User from './User.js';
import Book from './Book.js';

class Favorite extends Model {}

Favorite.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Book,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Favorite',
  tableName: 'favorites',
  timestamps: true
});

export default Favorite;

