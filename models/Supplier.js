const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  companyname: { type: String },
  location: { type: String},
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;