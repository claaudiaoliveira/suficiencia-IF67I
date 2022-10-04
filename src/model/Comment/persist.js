const translation = require('./persist.translation');
const Table = require('../../table/comments');
const createCustomError = require('../../util/createCustomError');
const Publication = require('../Publication');
const get = require('./get');

module.exports = async (parameters, context) => {
  const language = translation[context.language];
  const publicationVerification = await Publication.verify({
    id: parameters.publicationId,
  });

  if (!publicationVerification.isAvailable)
    throw createCustomError(400, { message: language.error1 });

  const result = await Table.create(parameters);

  const comment = await get({ id: result.dataValues.id });

  return comment;
};
