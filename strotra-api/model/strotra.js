const mongoose = require("mongoose");

const strotraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dedicatedToGod: {
    type: String,
    required: true,
  },
  theStrotra: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Strotra", strotraSchema);
