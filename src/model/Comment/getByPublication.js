const Table = require('../../table/comments');
const User = require('../../table/users');
const Publication = require('../../table/publications');

module.exports = async (parameters) => {
  const result = await Table.findAll({
    where: {
      publicationId: parameters.publicationId,
    },
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

  return result;
};
