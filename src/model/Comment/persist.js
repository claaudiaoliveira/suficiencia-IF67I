const translation = require('./persist.translation');
const Comment = require('../../table/comments');
const PublicationTable = require('../../table/publications');
const createCustomError = require('../../util/createCustomError');
const Publication = require('../Publication');
const get = require('./get');

module.exports = async (parameters, context) => {
  const language = translation[context.language];
  const publicationVerification = await Publication.verify({
    id: parameters.publicationId,
  });

  async function calculateAverage() {
    let sumRate = 0.0;
    let throwbackRate;

    const comments = await Comment.findAll({
      where: { publicationId: parameters.publicationId },
    });

    await Promise.all(
      comments.map(async (comment) => {
        sumRate += comment.rate;
      })
    );

    let avgRate = sumRate / comments.length;

    if (comments.length == 0) {
      throwbackRate = 0;
    } else {
      throwbackRate = Math.round(avgRate * 2) / 2;
    }
    PublicationTable.update(
      { avgRate: throwbackRate },
      { where: { id: parameters.publicationId } }
    );
  }

  if (!publicationVerification.isAvailable)
    throw createCustomError(400, { message: language.error1 });

  const result = await Comment.create(parameters);

  const comment = await get({ id: result.dataValues.id }).then((comment) => {
    calculateAverage();
    return comment;
  });

  return comment;
};
