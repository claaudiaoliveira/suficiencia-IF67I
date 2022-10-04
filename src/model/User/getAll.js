const Table = require('../../table/users');

module.exports = async () => {
  const result = await Table.findAll({
    attributes: ['id', 'name', 'email', 'type'],
  });

  return result;
};
