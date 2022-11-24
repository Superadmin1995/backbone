const moment = require('moment');
const { debug } = require('../../config');

module.exports = {
  info (value) {
    const key = `[BACKBONE-INFO-${moment().format()}]`;
    try {
      console.log(JSON.stringify({[key]: value}, null, 2));
    } catch (error) {
      console.error({ [key]: 'Error Logging!'})
    }
  },
  debug (value) {
    if (!debug) return;
    const key = `[BACKBONE-DEBUG-${moment().format()}]`;
    try {
      console.log(JSON.stringify({[key]: value}, null, 2));
    } catch (error) {
      console.error({ [key]: 'Error Logging!'})
    }
  },
  error (value) {
    const key = `[BACKBONE-ERROR-${moment().format()}]`;
    try {
      console.error(key, value);
    } catch (error) {
      console.error({ [key]: 'Error Logging!'})
    }
  },
}
