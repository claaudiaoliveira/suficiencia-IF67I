module.exports = {
  'en-US': {
    success1: 'Publication found successfully.',
    success2: 'No publication was found.',
    validation: {
      type: 'Invalid request body type.',
      properties: {
        ingredients: 'The parameter ingredients must be a string.',
        price: 'The parameter price must be a decimal.',
      },
      required: {},
      additionalProperties: 'Additional parameters are not allowed.',
      _: 'Invalid parameters.',
    },
  },
  'pt-BR': {
    success1: 'Publicações encontradas com sucesso.',
    success2: 'Nenhuma publicação foi encontrada.',
    validation: {
      type: 'Tipo do corpo da requisição inválido.',
      properties: {
        ingredients: 'O parâmetro ingredients deve ser uma string.',
        price: 'O parâmetro price deve ser um deciaml.',
      },
      required: {},
      additionalProperties: 'Parâmetros adicionais não são permitidos.',
      _: 'Parâmetros inválidos.',
    },
  },
};
