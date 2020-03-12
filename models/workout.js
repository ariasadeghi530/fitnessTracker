const mongoose = require('mongoose');

module.exports = mongoose.model('workout', new mongoose.Schema({
 
  day: Date,
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]

})
);