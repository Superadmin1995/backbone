const { omit } = require('lodash');
const UserModel = require('../models/user');

module.exports = {
  async getById (_id) {
    const user = await UserModel.findById(_id);
    return omit(user.toObject(), ['password']);
  }
}
