module.exports = {
  'en-US': {
    success1: 'Publication commented successfully.',
    validation: {
      type: 'Invalid request body type.',
      properties: {
        publicationId:'The parameter id should be an integer greater than or equal to zero.',
        comment: 'The parameter comment must be a string.',
        rate: 'The parameter rate must be a number between 1 and 10.'
      },
      required: {
        publicationId: 'The parameter publicationId is required.',
        comment: 'The parameter comment is required.',
        rate: 'The parameter rate is required..'
      },
      additionalProperties: 'Additional parameters are not allowed.',
      _: 'Invalid parameters.',
    },
  },
  'pt-BR': {
    success1: 'Publicação comentada com sucesso.',
    validation: {
      type: 'Tipo do corpo da requisição inválido.',
      properties: {
        publicationId:  'O parâmetro publicationId deve ser um número inteiro maior ou igual à zero.',
        comment: 'O parâmetro comment deve ser uma string.',
        rate: 'O parâmetro rate deve ser um número entre 1 e 10.'
      },
      required: {
        publicationId:  'O parâmetro publicationId é obrigatório.',
        comment: 'O parâmetro comment é obrigatório.',
        rate: 'O parâmetro rate é obrigatório.'
      },
      additionalProperties: 'Parâmetros adicionais não são permitidos.',
      _: 'Parâmetros inválidos.',
    },
  },
};
