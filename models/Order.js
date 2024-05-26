const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderdate: { type: String},
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  totalamount: { type: Number},
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;