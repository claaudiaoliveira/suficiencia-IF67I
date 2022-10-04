const translation = require('./preRequest.translation');
const Jwt = require('jsonwebtoken');

module.exports = (handler) => async (request, response) => {
  let userId = null;
  let dataToken = null;
  let token = null;
  let context = {
    language:
      request.headers['accept-language'] || process.env.DEFAULT_LANGUAGE,
    token: null,
    userId: null,
    type: 'anonymous',
  };
  const language = translation[context.language];

  if (request.headers['authorization']) {
    const token = request.headers['authorization'].split(' ')[1];

    dataToken = Jwt.verify(token, process.env.SECRET_TOKEN);

    context = {
      ...context,
      userId: dataToken.data.id,
      name: dataToken.data.name,
      email: dataToken.data.email,
      password: dataToken.data.password,
      type: dataToken.data.type,
      token,
    };
  }

  try {
    const { ...requestBody } = request.body;

    const { statusCode, body } = await handler(requestBody, {
      ...context,
    });

    return response.status(statusCode).json(body);
  } catch (error) {
    if (error.type)
      return response
        .status(error.response.statusCode)
        .json({ ...error.response.body, data: null });

    console.log(error);
    return response.status(500).json({ message: language.error1, data: null });
  }
};
