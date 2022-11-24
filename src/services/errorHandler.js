const { pick } = require('lodash');

module.exports = (error, req, res, next) => {
  logger.error(error);
  const errorDetails = pick(error, 'message', 'stack');
  res.status(500).send({ errorDetails });
}
