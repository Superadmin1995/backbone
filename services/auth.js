/* eslint-disable no-underscore-dangle */
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const UserModel = require('../models/user');
const config = require('../config');

module.exports = {
  async register(userDetails) {
    const userMeta = _.pick(userDetails, ['name', 'email', 'password', 'mobile']);
    userMeta.password = await argon2.hash(userMeta.password);
    const user = new UserModel(userMeta);
    await user.save();
    let userObj = user.toObject();
    userObj = _.omit(userObj, ['password']);
    return userObj;
  },

  async login(userDetails) {
    const user = await UserModel.findOne({ email: userDetails.email });
    if (!user) {
      throw new Error('User not found');
    }
    if (!await argon2.verify(user.password, userDetails.password)) {
      throw new Error('Incorrect password');
    }
    let userObj = user.toObject();
    userObj = _.omit(userObj, ['password']);
    return userObj;
  },

  generateToken(user) {
    const data = {
      _id: user._id.toString(),
      email: user.email,
    };
    return jwt.sign({ data }, config.secretKey, { expiresIn: config.jwtExpiry }).toString();
  },

  async authenticate(token) {
    const { data } = jwt.verify(token, config.secretKey);
    const user = await UserModel.findById(data._id);
    if (!user) {
      throw new Error('invalid user');
    }
    const userObj = _.omit(user.toObject(), ['password']);
    return userObj;
  },
};
