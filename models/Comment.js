import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/db.js';

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  reviewId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Comment',
});

// Associations
Comment.associate = (models) => {
  models.Review = true;
  Comment.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
  });
  Comment.belongsTo(models.Review, {
    foreignKey: 'reviewId',
    as: 'review',
  });
};

export default Comment;

