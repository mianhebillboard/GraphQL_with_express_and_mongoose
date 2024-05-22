const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: Number, required: true },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
