const Table = require('../../table/users');

module.exports = async (parameters) => {
  const result = await Table.findOne({
    attributes: ['id', 'name', 'email','password', 'type'],
    where: {
      email: parameters.email,
    },
  });

  return result;
};
