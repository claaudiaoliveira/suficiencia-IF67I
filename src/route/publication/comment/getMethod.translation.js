module.exports = {
  'en-US': {
    success1: 'Publication comments found successfully.',
    success2: 'No publication comments was found.',
    validation: {
      type: 'Invalid request body type.',
      properties: {
        publicationId:
          'The parameter id should be an integer greater than or equal to zero.',
      },
      required: {
        publicationId: 'The parameter publicationId is required.',
      },
      additionalProperties: 'Additional parameters are not allowed.',
      _: 'Invalid parameters.',
    },
  },
  'pt-BR': {
    success1: 'Comentários de publicação encontrados com sucesso.',
    success2: 'Nenhum comentário de publicação foi encontrado.',
    validation: {
      type: 'Tipo do corpo da requisição inválido.',
      properties: {
        publicationId:
          'O parâmetro id deve ser um número inteiro maior ou igual à zero.',
      },
      required: {
        publicationId: 'O parâmetro publicationId é obrigatório.',
      },
      additionalProperties: 'Parâmetros adicionais não são permitidos.',
      _: 'Parâmetros inválidos.',
    },
  },
};
