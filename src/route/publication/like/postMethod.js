const translation = require('./postMethod.translation');
const validation = require('./postMethod.validation');
const Like = require('../../../model/Like');

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = validation(body, context);

  const like = await Like.persist(parameters, context);

  return {
    statusCode: 200,
    body: { message: language.success1, data: { like } },
  };
};
