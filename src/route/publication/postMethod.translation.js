module.exports = {
  'en-US': {
    success1: 'Publication registered successfully.',
    validation: {
      type: 'Invalid request body type.',
      properties: {
        name: 'The parameter name must be a string between 1 and 200 characters in length.',
        description:
          'The parameter description must be a string between 1 and 200 characters in length.',
        ingredients: 'The parameter ingredients must be a string.',
        photo: 'The parameter photo must be a string in base64.',
        price: 'The parameter price must be a decimal.',
      },
      required: {
        name: 'The parameter name is required.',
        description: 'The parameter description is required.',
        ingredients: 'The parameter ingredients is required.',
        photo: 'The parameter photo is required.',
        price: 'The parameter price is required.',
      },
      additionalProperties: 'Additional parameters are not allowed.',
      _: 'Invalid parameters.',
    },
  },
  'pt-BR': {
    success1: 'Publicação cadastrada com sucesso.',
    validation: {
      type: 'Tipo do corpo da requisição inválido.',
      properties: {
        name: 'O parâmetro name deve ser uma string entre 1 e 200 caracteres.',
        description:
          'O parâmetro description deve ser uma string entre 1 e 200 caracteres.',
        ingredients: 'O parâmetro ingredients deve ser uma string.',
        photo: 'O parâmetro photo deve ser uma string em base64.',
        price: 'O parâmetro price deve ser um deciaml.',
      },
      required: {
        name: 'O parâmetro name é obrigatório.',
        description: 'O parâmetro description é obrigatório.',
        ingredients: 'O parâmetro ingredients é obrigatório.',
        photo: 'O parâmetro photo é obrigatório.',
        price: 'O parâmetro price é obrigatório.',
      },
      additionalProperties: 'Parâmetros adicionais não são permitidos.',
      _: 'Parâmetros inválidos.',
    },
  },
};
