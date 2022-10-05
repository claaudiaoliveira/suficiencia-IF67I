const translation = require('./getMethod.translation');
const validation = require('./getMethod.validation');
const Comment = require('../../../model/Comment');

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = validation(body, context);

  const comment = await Comment.getByPublication(parameters, context);

  return {
    statusCode: 200,
    body: {
      message: comment.length ? language.success1 : language.success2,
      data: { comment },
    },
  };
};
