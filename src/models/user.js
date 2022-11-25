const mongoose = require('../services/mongoose');

const { Schema } = mongoose;
const UserSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 40,
    minlength: 1,
  },
  email: {
    type: String,
    trim: true,
    minlength: 1,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    minlength: 8,
  },
  mobile: {
    type: Number,
    trim: true,
    length: 10,
  },
});

module.exports = mongoose.model('Users', UserSchema);
