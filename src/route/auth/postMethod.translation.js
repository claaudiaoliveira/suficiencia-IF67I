module.exports = {
  'en-US': {
    success1: 'Login successfully.',
    validation: {
      type: 'Invalid request body type.',
      properties: {
        email:
          'The parameter email must be a string between 1 and 200 characters in length.',
        password:
          'The parameter password must be a string between 1 and 200 characters in length.',
      },
      required: {
        email: 'The parameter email is required.',
        password: 'The parameter password is required.',
      },
      additionalProperties: 'Additional parameters are not allowed.',
      _: 'Invalid parameters.',
    },
  },
  'pt-BR': {
    success1: 'Login efetuado com sucesso.',
    validation: {
      type: 'Tipo do corpo da requisição inválido.',
      properties: {
        email:
          'O parâmetro email deve ser uma string entre 1 e 200 caracteres.',
        password:
          'O parâmetro password deve ser uma string entre 1 e 200 caracteres.',
      },
      required: {
        email: 'O parâmetro email é obrigatório.',
        password: 'O parâmetro password é obrigatório.',
      },
      additionalProperties: 'Parâmetros adicionais não são permitidos.',
      _: 'Parâmetros inválidos.',
    },
  },
};
