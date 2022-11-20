const mongoose = require('mongoose');
const { mongoUrl } = require('../config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(mongoUrl, options);

mongoose.connection.on('open', () => {
  // eslint-disable-next-line no-console
  console.log('Connected to mongo server.');
});

mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log('Could not connect to mongo server!', err);
});

module.exports = mongoose;
