const Ajv = require('ajv');
const ajvErrors = require('ajv-errors');
const translation = require('./patchMethod.translation');
const createCustomError = require('../../util/createCustomError');

const ajv = new Ajv({ allErrors: true });

ajvErrors(ajv);

module.exports = (parameters, context) => {
  const language = translation[context.language];
  const schema = {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        minimum: 1,
      },
    },
    required: ['id'],
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
