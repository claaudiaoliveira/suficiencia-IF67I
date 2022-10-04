const Table = require('../../table/users');

module.exports = async (parameters) => {
  const result = await Table.findAll({
    where: {
      email: parameters.email,
    },
  });

  return {
    isAvailable: result.length,
  };
};
