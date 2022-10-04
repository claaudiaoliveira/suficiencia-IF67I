const translation = require('./putMethod.translation');
const validation = require('./putMethod.validation');
const User = require('../../model/user');

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = validation(body, context);

  const user = await User.update(parameters, context);

  return {
    statusCode: 200,
    body: { message: language.success1, data: { user } },
  };
};
