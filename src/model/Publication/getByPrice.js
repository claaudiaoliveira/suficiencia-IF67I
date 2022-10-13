const Table = require('../../table/publications');
const User = require('../../table/users');
const Sequelize = require('sequelize');

module.exports = async (parameters) => {
  const result = await Table.findAll({
    attributes: ['id', 'name', 'description', 'ingredients', 'photo', 'price', 'avgRate'],
    include: [{ model: User, attributes: ['id', 'name', 'email', 'type'] }],
    where: {
      price: {
        [Sequelize.Op.lte]: parameters.price,
      },
    },
  });

  return result;
};
