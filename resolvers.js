// const Customer = require('./models/Customer');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');
// const Order = require('./models/Order');
// const OrderItem = require('./models/OrderItem');

const resolvers = {
  Query: {
    suppliers: async () => Supplier.find(),
    supplier: async (_, { id }) => Supplier.findById(id),

    products: async () => Product.find(),
    product: async (_, { id }) => Product.findById(id),

    orderitems: async () => OrderItem.find(),
    orderitem: async (_, { id }) => OrderItem.findById(id),

    orders: async () => Order.find(),
    order: async (_, { id }) => Order.findById(id),

    customers: async () => Customer.find(),
    customer: async (_, { id }) => Customer.findById(id),
  },

  Mutation: {
    addCustomer: async (_, { customer }) => {
      const newCustomer = new Customer(customer);
      return newCustomer.save();
    },
    deleteCustomer: async (_, { id }) => {
      await Customer.findByIdAndDelete(id);
      return Customer.find();
    },
    updateCustomer: async (_, { id, edits }) => {
      return Customer.findByIdAndUpdate(id, edits, { new: true });
    },
  },
};

module.exports = resolvers;