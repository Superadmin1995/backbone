const { serve, setup } = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(`${__dirname}/../../swagger.yaml`);

module.exports = {
  setup: () => setup(swaggerDocument),
  serve
}
