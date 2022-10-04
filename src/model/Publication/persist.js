const Table = require('../../table/publications');
const get = require('./get');

module.exports = async (parameters, context) => {

  const result = await Table.create({
    name: parameters.name,
    description: parameters.description,
    ingredients: parameters.ingredients,
    photo: parameters.photo,
    price: parameters.price,
    userId: parameters.userId,
  });

  const publication = await get({id: result.dataValues.id});

  return publication;
};
