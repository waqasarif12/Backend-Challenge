const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./user');

const Image = sequelize.define('Image', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  url: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

Image.belongsTo(User, { foreignKey: 'userId' });

module.exports = Image;
