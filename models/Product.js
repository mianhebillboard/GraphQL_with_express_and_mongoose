const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productname: { type: String, required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;