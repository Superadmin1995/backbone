const express = require('express');

const config = require('./config');
const routes = require('./routes/routes');

const { port } = config;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is up on port ${port}`));
