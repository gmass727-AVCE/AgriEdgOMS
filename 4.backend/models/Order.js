const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  customer: String,
  status: {
    type: String,
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
