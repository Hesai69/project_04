var mongoose = require('mongoose');

var ExerciseSchema = mongoose.Schema({
  name: String,
  date: String,
  sets: []
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
