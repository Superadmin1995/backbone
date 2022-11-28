const mongoose = require('mongoose');
const { mongoUrl } = require('../../config');

mongoose.connect(mongoUrl);

mongoose.connection.on('open', () => {
  logger.debug('Connected to mongo server.');
});

mongoose.connection.on('error', (err) => {
  logger.error('Could not connect to mongo server!');
  logger.error(err);
});

module.exports = mongoose;
