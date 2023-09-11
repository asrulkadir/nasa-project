const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
  // Add a new property to the schema called "lastUpdated" with a type of Date.
  lastUpdated: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Create a new model called "Launch" that uses the launchesSchema.
module.exports = mongoose.model('Launch', launchesSchema);