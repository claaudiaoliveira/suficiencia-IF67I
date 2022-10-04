const Sequelize = require('sequelize');
const Table = require('../../table/likes');

module.exports = async (parameters) => {
  const result = await Table.findAll({
    where: {
      [Sequelize.Op.and]: [
        { userId: parameters.userId },
        { publicationId: parameters.publicationId },
      ],
    },
  });

  return {
    isAvailable: result.length,
  };
};
