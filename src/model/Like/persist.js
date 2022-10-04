const translation = require('./persist.translation');
const Table = require('../../table/likes');
const createCustomError = require('../../util/createCustomError');
const Publication = require('../Publication');
const get = require('./get');
const verifyByUserAndPublication = require('./verifyByUserAndPublication');

module.exports = async (parameters, context) => {
  const language = translation[context.language];
  const publicationVerification = await Publication.verify({
    id: parameters.publicationId,
  });

  if (!publicationVerification.isAvailable)
    throw createCustomError(400, { message: language.error1 });

  const likeVerification = await verifyByUserAndPublication(parameters);

  if (likeVerification.isAvailable)
  throw createCustomError(400, { message: language.error2 });

  const result = await Table.create(parameters);

  const like = await get({ id: result.dataValues.id });

  return like;
};
