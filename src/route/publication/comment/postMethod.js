const translation = require('./postMethod.translation');
const validation = require('./postMethod.validation');
const Comment = require('../../../model/Comment');

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = validation(body, context);

  const comment = await Comment.persist(parameters, context);

  return {
    statusCode: 200,
    body: { message: language.success1, data: { comment } },
  };
};
