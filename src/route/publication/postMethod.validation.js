const Ajv = require('ajv');
const ajvErrors = require('ajv-errors');
const translation = require('./postMethod.translation');
const createCustomError = require('../../util/createCustomError');

const ajv = new Ajv({ allErrors: true });

ajvErrors(ajv);

module.exports = (parameters, context) => {
  const language = translation[context.language];
  const schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 1,
        maxLength: 200,
      },
      description: {
        type: 'string',
        minLength: 1,
        maxLength: 200,
      },
      ingredients: {
        type: 'string',
      },
      photo: {
        type: 'string',
      },
      price: {
        type: 'number',
      },
    },
    required: ['name', 'description', 'ingredients', 'photo', 'price'],
    additionalProperties: false,
    errorMessage: language.validation,
  };
  const validate = ajv.compile(schema);

  if (!validate(parameters))
    throw createCustomError(400, {
      message: validate.errors.map(({ message }) => message).join(' '),
    });

  return {
    ...parameters,
    userId: context.userId,
  };
};
