const Sequelize = require('sequelize');
const database = require('./db');
const User = require('./users');
const Publication = require('./publications');

const Like = database.define('likes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

Like.belongsTo(Publication, {
  constraint: true,
  foreignKey: 'publicationId',
});

Publication.hasMany(Like, {
  foreignKey: 'publicationId',
});

Like.belongsTo(User, {
  constraint: true,
  foreignKey: 'userId',
});

User.hasMany(Like, {
  foreignKey: 'userId',
});


module.exports = Like;