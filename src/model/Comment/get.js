const Table = require('../../table/comments');
const User = require('../../table/users');
const Publication = require('../../table/publications');

module.exports = async (parameters) => {
  const result = await Table.findByPk(parameters.id, {
    attributes: ['id', 'comment'],
    include: [
      { model: User, attributes: ['id', 'name', 'email', 'type'] },
      {
        model: Publication,
        attributes: [
          'id',
          'name',
          'description',
          'ingredients',
          'photo',
          'price',
        ],
      },
    ],
  });

  return result || {};
};
