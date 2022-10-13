const translation = require('./getMethod.translation');
const validation = require('./getMethod.validation');
const Publication = require('../../model/Publication');
const Comment = require('../../model/Comment');

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = body;

  let publication = null;

  publication = await Comment.getAll(parameters, context);

  return {
    statusCode: 200,
    body: { message: language.success1, data: { publication } },
  };
};
