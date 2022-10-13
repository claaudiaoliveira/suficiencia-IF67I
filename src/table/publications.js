const Sequelize = require('sequelize');
const database = require('./db');
const User = require('./users');

const Publication = database.define('publications', {
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
  description: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  ingredients: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  photo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  avgRate: {
    type: Sequelize.FLOAT,
  },
  // userId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'users',
  //     key: 'id',
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE'
  // },
});

Publication.belongsTo(User, {
  constraint: true,
  foreignKey: 'userId',
});

module.exports = Publication;
