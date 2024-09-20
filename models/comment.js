const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./user');
const Image = require('./image');

const Comment = sequelize.define('Comment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  content: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  imageId: { type: DataTypes.INTEGER, allowNull: false },
});

Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Image, { foreignKey: 'imageId' });

module.exports = Comment;
