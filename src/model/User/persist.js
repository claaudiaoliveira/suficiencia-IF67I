const bcryptjs = require('bcryptjs');
const translation = require('./persist.translation');
const Table = require('../../table/users');
const verifyByEmail = require('./verifyByEmail');
const createCustomError = require('../../util/createCustomError');

module.exports = async (parameters, context) => {
  const language = translation[context.language];

  const userEmailVerification = await verifyByEmail(parameters);

  if (userEmailVerification.isAvailable)
    throw createCustomError(400, { message: language.error1 });

  const result = await Table.create({
    name: parameters.name,
    email: parameters.email,
    password: bcryptjs.hashSync(parameters.password, 3),
    type: parameters.type,
  });

  return {
    id: result.dataValues.id,
    name: result.dataValues.name,
    email: result.dataValues.email,
    type: result.dataValues.type,
  };
};
