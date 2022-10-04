const bcryptjs = require('bcryptjs');
const translation = require('./checkCredentials.translation');
const Table = require('../../table/users');
const getByEmail = require('./getByEmail');
const createCustomError = require('../../util/createCustomError');

module.exports = async (parameters, context) => {
  const language = translation[context.language];

  const user = await getByEmail(parameters);

  if (!user) throw createCustomError(400, { message: language.error1 });

  const same = await bcryptjs.compare(parameters.password, user.password);

  if (!same) throw createCustomError(400, { message: language.error1 });
  return user;
};
