const Table = require('../../table/publications');

module.exports = async (parameters) => {
  const result = await Table.findAll({
    where: {
      id: parameters.id,
    },
  });
  return {
    isAvailable: result.length,
  };
};
