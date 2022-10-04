const Table = require('../../table/users');

module.exports = async (parameters) => {
  const result = await Table.findOne({
    attributes: ['id', 'name', 'email', 'type'],
    where: {
      id: parameters.id,
    },
  });

  return result || {};
};
