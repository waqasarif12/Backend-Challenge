const { Sequelize, DataTypes } = require('server.js').sequelize;
const sequelize = require('../config/db'); // Separate file to handle the connection
const bcrypt = require('bcryptjs');


const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

// Hash password before saving user
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;
