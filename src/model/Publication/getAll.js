const Table = require('../../table/publications');
const User = require('../../table/users');

module.exports = async (parameters) => {
  const result = await Table.findAll({
    attributes: ['id', 'name', 'description', 'ingredients', 'photo', 'price', 'avgRate'],
    include: [{ model: User, attributes: ['id', 'name', 'email', 'type'] }],
  });

  return result;
};
