module.exports = (statusCode, body, type = 'CustomError') => {
  const customError = new Error(body.message || type);

  customError.type = type;
  customError.response = {
    statusCode,
    body,
  };

  return customError;
};
