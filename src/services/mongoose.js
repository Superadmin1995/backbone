const mongoose = require('mongoose');
const { mongoUrl } = require('../../config');
const logger = require('./logger');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(mongoUrl, options);

mongoose.connection.on('open', () => {
  logger.debug('Connected to mongo server.');
});

mongoose.connection.on('error', (err) => {
  logger.debug('Could not connect to mongo server!', err);
});

module.exports = mongoose;
