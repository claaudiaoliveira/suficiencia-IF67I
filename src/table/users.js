const Sequelize = require('sequelize');
const database = require('./db');

const User = database.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
});

module.exports = User;
