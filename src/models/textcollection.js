const mongoose = require("mongoose");

const TextSchema = new mongoose.Schema({
  _id: String,
  name: String,
  percentage: Number,
  weightedFilter: Number,
  like: Number,
  attraction: Number,
});

module.exports = mongoose.model("TextCollection", TextSchema);
