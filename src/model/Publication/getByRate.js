const Publication = require('../../table/publications');
const User = require('../../table/users');
const Sequelize = require('sequelize');

module.exports = async (parameters) => {
  const result = await Publication.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'ingredients',
      'photo',
      'price',
      'avgRate',
    ],
    include: [{ model: User, attributes: ['id', 'name', 'email', 'type'] }],
    where: {
      avgRate: {
        [Sequelize.Op.lt]: parameters.rate,
      },
    },
  });

  return result;
};
