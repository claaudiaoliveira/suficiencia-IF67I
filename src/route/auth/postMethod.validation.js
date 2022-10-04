const Ajv = require('ajv');
const ajvErrors = require('ajv-errors');
const translation = require('./postMethod.translation');
const createCustomError = require('../../util/createCustomError');

const ajv = new Ajv({ allErrors: true });

ajv.addFormat('validatePassword', { validate: (value) => /^\w+/.test(value) });

ajv.addFormat('validateEmail', { validate: (value) => /^[a-z0-9.]+@[a-z0-9]+\.\D+/.test(value) });

ajvErrors(ajv);

module.exports = (parameters, context) => {
  const language = translation[context.language];
  const schema = {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        minLength: 1,
        maxLength: 200,
        format: 'validateEmail'
      },
      password: {
        type: 'string',
        minLength: 1,
        maxLength: 200,
        format: 'validatePassword',
      },
    },
    required: ['email', 'password'],
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
