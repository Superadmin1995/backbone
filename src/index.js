global.logger = require('./services/logger');
const express = require('express')
const config = require('../config');
const routes = require('./routes/routes');
const errorHandler = require('./services/errorHandler');

const { port } = config;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(errorHandler);

app.listen(port, () => logger.debug(`Server is up on port ${port}`));
