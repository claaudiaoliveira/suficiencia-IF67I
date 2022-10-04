module.exports = {
  'en-US': {
    success1: 'User updated successfully.',
    validation: {
      type: 'Invalid request body type.',
      properties: {
        id: 'The parameter id should be an integer greater than or equal to zero.',
        name: 'The parameter name must be a string between 1 and 200 characters in length.',
        email:
          'The parameter email must be a string between 1 and 200 characters in length.',
        password:
          'The parameter password must be a string between 1 and 200 characters in length.',
        type: 'The parameter type must be a string being "admin" or "regular".',
      },
      required: {
        id: 'The parameter id is required.',
      },
      additionalProperties: 'Additional parameters are not allowed.',
      _: 'Invalid parameters.',
    },
  },
  'pt-BR': {
    success1: 'Usuário alterado com sucesso.',
    validation: {
      type: 'Tipo do corpo da requisição inválido.',
      properties: {
        id: 'O parâmetro id deve ser um número inteiro maior ou igual à zero.',
        name: 'O parâmetro name deve ser uma string entre 1 e 200 caracteres.',
        email:
          'O parâmetro email deve ser uma string entre 1 e 200 caracteres.',
        password:
          'O parâmetro password deve ser uma string entre 1 e 200 caracteres.',
        type: 'O parâmetro type deve ser uma string sendo "admin" ou "regular".',
      },
      required: {
        id: 'O parâmetro id é obrigatório.',
      },
      additionalProperties: 'Parâmetros adicionais não são permitidos.',
      _: 'Parâmetros inválidos.',
    },
  },
};
