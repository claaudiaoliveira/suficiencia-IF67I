const Table = require('../../table/publications');
const User = require('../../table/users');
const Sequelize = require('sequelize');

module.exports = async (parameters) => {
  const result = await Table.findAll({
    attributes: ['id', 'name', 'description', 'ingredients', 'photo', 'price'],
    include: [{ model: User, attributes: ['id', 'name', 'email', 'type'] }],
    where: {
      [Sequelize.Op.and]: [
        {
          ingredients: {
            [Sequelize.Op.like]: `%${parameters.ingredients}%`,
          },
        },
        {
          price: {
            [Sequelize.Op.lte]: parameters.price,
          },
        },
      ],
    },
  });

  return result;
};
