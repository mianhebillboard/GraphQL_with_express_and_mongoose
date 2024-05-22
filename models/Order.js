const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderdate: { type: String, required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  totalamount: { type: Number, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;