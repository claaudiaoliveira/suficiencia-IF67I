const Jwt = require('jsonwebtoken');

module.exports = (parameters) => {
  return new Promise((resolve) => {
    const expiration = Date.now() + (86400000); //Token expira em um dia
    const claims = {
      expiration,
      data: parameters,
    };

    const token = Jwt.sign(claims, process.env.SECRET_TOKEN);

    resolve(token);
  });
};
