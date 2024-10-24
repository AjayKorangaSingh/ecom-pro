const mongoose = require("mongoose");

const AddressModel = new mongoose.Schema({
  fistname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  streetAddress: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  zip: {
    type: Number,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  mobile: {
    type: String,
    require: true,
  },
});

const address = mongoose.model("address", AddressModel);

module.exports = address;
