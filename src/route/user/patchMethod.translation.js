module.exports = {
  'en-US': {
    success1: 'User deleted successfully.',
    validation: {
      type: 'Invalid request body type.',
      properties: {
        id: 'The parameter id should be an integer greater than or equal to zero.',
      },
      required: {
        id: 'The parameter id is required.',
      },
      additionalProperties: 'Additional parameters are not allowed.',
      _: 'Invalid parameters.',
    },
  },
  'pt-BR': {
    success1: 'Usuário excluído com sucesso.',
    validation: {
      type: 'Tipo do corpo da requisição inválido.',
      properties: {
        id: 'O parâmetro id deve ser um número inteiro maior ou igual à zero.',
      },
      required: {
        id: 'O parâmetro id é obrigatório.',
      },
      additionalProperties: 'Parâmetros adicionais não são permitidos.',
      _: 'Parâmetros inválidos.',
    },
  },
};
