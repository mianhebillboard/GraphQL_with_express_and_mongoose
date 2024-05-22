const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  companyname: { type: String, required: true },
  location: { type: String, required: true },
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;