const bcryptjs = require('bcryptjs');
const translation = require('./update.translation');
const Table = require('../../table/users');
const createCustomError = require('../../util/createCustomError');
const get = require('./get');

module.exports = async (parameters, context) => {
  const language = translation[context.language];

  if (context.type === 'regular' && parameters.id !== context.userId)
    throw createCustomError(403, { message: language.error2 });

  const user = await Table.findByPk(parameters.id);

  if (!user) throw createCustomError(400, { message: language.error1 });

  user.name = parameters.name || user.name;
  user.email = parameters.email || user.email;
  user.password = parameters.password
    ? bcryptjs.hashSync(parameters.password, 3)
    : user.password;
  context.type === 'admin'
    ? (user.type = parameters.type || user.type)
    : (user.type = user.type);

  await user.save();

  return await get(parameters);
};
