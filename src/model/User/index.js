const persist = require('./persist');
const verifyByEmail = require('./verifyByEmail');
const getAll = require('./getAll');
const get = require('./get');
const remove = require('./remove');
const update = require('./update');
const getByEmail = require('./getByEmail');
const checkCredentials = require('./checkCredentials');

module.exports = {
  persist,
  verifyByEmail,
  getAll,
  remove,
  update,
  get,
  getByEmail,
  checkCredentials,
};
