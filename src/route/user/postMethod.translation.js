module.exports = {
  'en-US': {
    success1: 'User registered successfully.',
    validation: {
      type: 'Invalid request body type.',
      properties: {
        name:
          'The parameter name must be a string between 1 and 200 characters in length.',
        email:
          'The parameter email must be a string between 1 and 200 characters in length.',
        password:
          'The parameter password must be a string between 1 and 200 characters in length.',
        type: 'The parameter type must be a string being "admin" or "regular".',
      },
      required: {
        name: 'The parameter name is required.',
        email: 'The parameter email is required.',
        password: 'The parameter password is required.',
        type: 'The parameter type is required.',
      },
      additionalProperties: 'Additional parameters are not allowed.',
      _: 'Invalid parameters.',
    },
  },
  'pt-BR': {
    success1: 'Usuário cadastrado com sucesso.',
    validation: {
      type: 'Tipo do corpo da requisição inválido.',
      properties: {
        name:
          'O parâmetro name deve ser uma string entre 1 e 200 caracteres.',
        email:
          'O parâmetro email deve ser uma string entre 1 e 200 caracteres.',
        password:
          'O parâmetro password deve ser uma string entre 1 e 200 caracteres.',
        type: 'O parâmetro type deve ser uma string sendo "admin" ou "regular".',
      },
      required: {
        name: 'O parâmetro name é obrigatório.',
        email: 'O parâmetro email é obrigatório.',
        password: 'O parâmetro password é obrigatório.',
        type: 'O parâmetro type é obrigatório.',
      },
      additionalProperties: 'Parâmetros adicionais não são permitidos.',
      _: 'Parâmetros inválidos.',
    },
  },
};
