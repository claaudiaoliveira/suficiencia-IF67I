const translation = require('./getMethod.translation');
const validation = require('./getMethod.validation');
const Publication = require('../../../model/Publication');

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = validation(body, context);

  let publication = null;

  publication = await Publication.getByRate(parameters, context);

  return {
    statusCode: 200,
    body: { message: language.success1, data: { publication } },
  };
};
