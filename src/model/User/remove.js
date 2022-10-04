const translation = require('./remove.translation');
const Table = require('../../table/users');
const createCustomError = require('../../util/createCustomError');

module.exports = async (parameters, context) => {
  const language = translation[context.language];

  const user = await Table.findByPk(parameters.id);

  if (!user) throw createCustomError(400, { message: language.error1 });

  user.destroy();
};
