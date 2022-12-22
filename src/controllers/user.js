const AuthService = require('../services/auth');
const UserService =  require('../services/user');

module.exports = {
  auth(req, res) {
    res.send(req.user);
  },

  async me(req, res) {
    const user = await UserService.getById(req.user._id);
    res.send(user);
  },

  async register(req, res) {
    try {
      const newUser = await AuthService.register(req.body);
      newUser.token = AuthService.generateToken(newUser);
      res.send(newUser);
    } catch (error) {
      res.status(400).send({ error });
    }
  },

  async authenticate(req, res, next) {
    try {
      const token = req.header('Authorization');
      req.user = await AuthService.authenticate(token);
      next();
    } catch (error) {
      res.status(401).send({ error });
    }
  },

  async login(req, res) {
    try {
      const user = await AuthService.login(req.body);
      user.token = AuthService.generateToken(user);
      res.send(user);
    } catch (error) {
      res.status(400).send({ error });
    }
  },
};
