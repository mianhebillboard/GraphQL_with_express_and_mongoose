const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
  unitprice: { type: Number},
  quantity: { type: Number},
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;