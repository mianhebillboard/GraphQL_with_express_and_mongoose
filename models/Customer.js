const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstname: { type: String},
  lastname: { type: String},
  city: { type: String},
  country: { type: String},
  phone: { type: Number},
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;