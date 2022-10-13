const persist = require('./persist');
const get = require('./get');
const getAll = require('./getAll');
const getByIngredientsAndPrice = require('./getByIngredientsAndPrice');
const getByIngredients = require('./getByIngredients');
const getByPrice = require('./getByPrice');
const getByRate = require('./getByRate');
const verify = require('./verify');

module.exports = {
  persist,
  get,
  getAll,
  getByIngredientsAndPrice,
  getByIngredients,
  getByPrice,
  getByRate,
  verify
}