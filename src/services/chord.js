const BaseService = require('./base');
const ChordModel = require('../models/chord');

class ChordService extends BaseService {
  constructor () {
    super(ChordModel);
  }
}

module.exports = new ChordService();
