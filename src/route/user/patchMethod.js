const translation = require('./patchMethod.translation');
const validation = require('./patchMethod.validation');
const User = require('../../model/user');

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = validation(body, context);

  await User.remove(parameters, context);

  return {
    statusCode: 200,
    body: { message: language.success1, data: null },
  };
};
