const translation = require('./getMethod.translation');
const validation = require('./getMethod.validation');
const User = require('../../model/user');

module.exports = async (body, context) => {
  const language = translation[context.language];
  validation(body, context);

  const user = await User.getAll();

  return {
    statusCode: 200,
    body: {
      message: user.length ? language.success1 : language.success2,
      data: { user },
    },
  };
};
