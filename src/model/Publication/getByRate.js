const Publication = require('../../table/publications');
const User = require('../../table/users');
const Comment = require('../../table/comments');
const Sequelize = require('sequelize');

module.exports = async (parameters) => {
  const len = await Comment.count({
    where: {
      rate: {
        [Sequelize.Op.between]: [1, 10],
      },
    },
  });
  const sum = await Comment.sum('rate');
  const avg = sum / len;
  
  const result = await Comment.findAll({
    attributes: ['id', 'comment', 'rate'],
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
    where: {
      rate: {
        [Sequelize.Op.and]: {
          [Sequelize.Op.lt]: avg,
          [Sequelize.Op.lt]: parameters.rate,
        },
      },
    },
  });

  return result;
};
