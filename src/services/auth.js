const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const UserModel = require('../models/user');
const config = require('../../config');

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

  generateToken(userDetails) {
    const user = {
      _id: userDetails._id.toString(),
      email: userDetails.email,
    };
    return jwt.sign({ user }, config.secretKey, { expiresIn: config.jwtExpiry }).toString();
  },

  async authenticate(bearerToken) {
    const [ tokenType, token] = bearerToken.split(' ');
    if (tokenType === 'Bearer') {
      const { user } = jwt.verify(token, config.secretKey);
      if (user?._id) {
        return user;
      }
    }
    throw new Error('Invalid User');
  },
};
