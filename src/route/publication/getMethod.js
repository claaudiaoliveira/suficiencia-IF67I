const translation = require('./getMethod.translation');
const validation = require('./getMethod.validation');
const Publication = require('../../model/Publication');

module.exports = async (body, context) => {
  const language = translation[context.language];
  const parameters = validation(body, context);

  let publication = null;
  if (!parameters.ingredients && !parameters.price)
    publication = await Publication.getAll(parameters, context);
  else if (parameters.ingredients && parameters.price)
    publication = await Publication.getByIngredientsAndPrice(
      parameters,
      context
    );
  else if (parameters.ingredients && !parameters.price)
    publication = await Publication.getByIngredients(parameters, context);
  else publication = await Publication.getByPrice(parameters, context);

  return {
    statusCode: 200,
    body: { message: language.success1, data: { publication } },
  };
};
