const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true, validate: {
    validator: function(value) {
      return /^https?:\/\//i.test(value)
    },
    message: "Image Url is Invalid"
  } },
  difficulty: {
    type: Number,
    require: true,
    min: 1,
    max: 5,
  },
});

const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube
