const database = require('./table/db');
const bcryptjs = require('bcryptjs');

module.exports = async () => {
  const User = require('./table/users');
  require('./table/publications');
  require('./table/comments');
  require('./table/likes');

  await database.sync();

  const user = await User.findByPk(1);
  if (!user)
    await User.create({
      name: 'Administrador',
      email: 'admin@gmail.com',
      password: bcryptjs.hashSync('admin', 3),
      type: 'admin',
    });
};
