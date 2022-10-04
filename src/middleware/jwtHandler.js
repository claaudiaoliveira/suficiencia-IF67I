const translation = require('./jwtHandler.translation');
const Jwt = require('jsonwebtoken');
const routesUserPermissions = require('./routesUserPermissions');

module.exports = async (request, response, next) => {
  const language =
    translation[
      request.headers['accept-language'] || process.env.DEFAULT_LANGUAGE
    ];

  const url = request.originalUrl;
  const requestMethod = request.method.toLowerCase();
  console.log(url, requestMethod);

  if (request.headers['authorization']) {
    const token = request.headers['authorization'].split(' ')[1];

    const tokenVerification = Jwt.verify(token, process.env.SECRET_TOKEN);

    if (Date.now() > tokenVerification.expiration)
      return response
        .status(401)
        .json({ message: language.error2, data: null });

    const routePermission = routesUserPermissions[
      tokenVerification.data.type
    ].filter(({ route, method }) => route === url && method === requestMethod);

    if (!routePermission.length)
      return response
        .status(403)
        .json({ message: language.error1, data: null });
  } else {
    const routePermission = routesUserPermissions['anonymous'].filter(
      ({ route, method }) => route === url && method === requestMethod
    );
    
    if (!routePermission.length)
      return response
        .status(403)
        .json({ message: language.error1, data: null });
  }

  return next();
};
