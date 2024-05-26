// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productname: String,
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  price: Number,
});

module.exports = mongoose.model('Product', productSchema);