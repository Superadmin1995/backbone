const ChordService = require('../services/chord');

module.exports = {
  async get(req, res) {
    try {
      const result = await ChordService.get(req.query)
      res.send(result);
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      const result = await ChordService.getById(req.params.id)
      res.send(result);
    } catch (error) {
      next(error);
    }
  },

  async post (req, res) {
    try {
      const result = await ChordService.post(req.body);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
};
