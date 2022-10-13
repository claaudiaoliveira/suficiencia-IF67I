const Ajv = require('ajv');
const ajvErrors = require('ajv-errors');
const translation = require('./getMethod.translation');
const createCustomError = require('../../../util/createCustomError');

const ajv = new Ajv({ allErrors: true });

ajvErrors(ajv);

module.exports = (parameters, context) => {
  const language = translation[context.language];
  const schema = {
    type: 'object',
    properties: {
      ingredients: {
        type: 'string',
      },
      price: {
        type: 'number',
      },
      rate: {
        type: 'integer',
      },
    },
    required: [],
    additionalProperties: false,
    errorMessage: language.validation,
  };
  const validate = ajv.compile(schema);

  if (!validate(parameters))
    throw createCustomError(400, {
      message: validate.errors.map(({ message }) => message).join(' '),
    });

  return parameters;
};
