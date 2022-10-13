const Sequelize = require('sequelize');
const database = require('./db');
const User = require('./users');
const Publication = require('./publications');

const Comment = database.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  rate: {
    type: Sequelize.INTEGER,
  },
});

Comment.belongsTo(Publication, {
  constraint: true,
  foreignKey: 'publicationId',
});

Publication.hasMany(Comment, {
  foreignKey: 'publicationId',
});

Comment.belongsTo(User, {
  constraint: true,
  foreignKey: 'userId',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
});

module.exports = Comment;
