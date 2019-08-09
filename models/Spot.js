const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  headImg: String,
  text: String,
  tags: [String],
  bookmarked: {
    type: Boolean,
    default: false
  },
  mapImg: String,
  location: {
    lat: Number,
    lng: Number
  }
});

module.exports = mongoose.model("Spot", spotSchema);
