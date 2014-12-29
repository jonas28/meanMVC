var mongoose = require('mongoose');

module.exports = mongoose.model('Step', {
  title: String,
  what: String,
  how: String,
  why: String
});