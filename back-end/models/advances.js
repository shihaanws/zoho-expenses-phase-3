var mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const advancesSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  paid_type: {
    type: String,
  },
  reference: {
    type: String,
  },
  notes: {
    type: String,
  },
  trip: {
    type: String,
  },
  paid_through: {
    type: String,
  },
});

module.exports = mongoose.model("advances", advancesSchema);
