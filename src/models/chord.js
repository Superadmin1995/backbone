const mongoose = require('../services/mongoose');

const { Schema } = mongoose;
const ChordSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 40,
    minlength: 1,
  },
});

module.exports = mongoose.model('Chords', ChordSchema);
