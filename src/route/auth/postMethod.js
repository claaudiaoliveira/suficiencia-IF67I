const translation = require('./postMethod.translation');
const validation = require('./postMethod.validation');
const User = require('../../model/user');
const tokenGenerator = require('../../middleware/tokenGenerator')

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = validation(body, context);

  const user = await User.checkCredentials(parameters, context);

  const token = await tokenGenerator(user);
  
  return {
    statusCode: 200,
    body: { message: language.success1, data: { token } },
  };
};
