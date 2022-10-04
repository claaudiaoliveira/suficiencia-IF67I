const translation = require('./postMethod.translation');
const validation = require('./postMethod.validation');
const Publication = require('../../model/Publication');

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = validation(body, context);

  const publication = await Publication.persist(parameters, context);

  return {
    statusCode: 200,
    body: { message: language.success1, data: { publication } },
  };
};
