const Customer = require('./models/Customer');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');
const mongoose = require('mongoose');

const resolvers = {
  Query: {
    suppliers: async () => Supplier.find(),
    supplier: async (_, { id }) => Supplier.findById(id),

    products: async () => Product.find().populate('supplier'),
    product: async (_, { id }) => Product.findById(id).populate('supplier'),

    orderitems: async () => OrderItem.find().populate('order').populate('product'),
    orderitem: async (_, { id }) => OrderItem.findById(id).populate('order').populate('product'),

    orders: async () => Order.find().populate('customer'),
    order: async (_, { id }) => Order.findById(id).populate('customer'),

    customers: async () => Customer.find(),
    customer: async (_, { id }) => Customer.findById(id),
  },

  Mutation: {
    addCustomer: async (_, { customer }) => {
      const newCustomer = new Customer(customer);
      return newCustomer.save();
    },
    // deleteCustomer: async (_, { id }) => {
    //   await Customer.findByIdAndDelete(id);
    //   return Customer.find();
    // },
    // updateCustomer: async (_, { id, edits }) => {
    //   return Customer.findByIdAndUpdate(id, edits, { new: true });
    // },

    addSupplier: async (_, { supplier }) => {
      const newSupplier = new Supplier(supplier);
      return newSupplier.save();
    },
    addProduct: async (_, { product }) => {
      const supplier = await Supplier.findById(product.supplierId);
      if (!supplier) {
        throw new Error('Supplier not found');
      }
      const newProduct = new Product({ ...product, supplier: supplier._id });
      const savedProduct = await newProduct.save();
      console.log("Product saved:", savedProduct);
      return savedProduct.populate('supplier');
    },
    addOrder: async (_, { order }) => {
      const newOrder = new Order({
        ...order,
        customer: new mongoose.Types.ObjectId(order.customerId),
      });
      await newOrder.save();
      return newOrder.populate('customer');
    },
    addOrderItem: async (_, { orderItem }) => {
      const newOrderItem = new OrderItem({
        ...orderItem,
        order: new mongoose.Types.ObjectId(orderItem.orderId),
        product: new mongoose.Types.ObjectId(orderItem.productId),
      });
      await newOrderItem.save();
      return OrderItem.findById(newOrderItem._id).populate('order').populate('product');
    },

    // updateProduct: async (_, { id, edits }) => {
    //   const updateData = { ...edits };
    //   if (edits.supplierId) {
    //     updateData.supplier = mongoose.Types.ObjectId(edits.supplierId);
    //     delete updateData.supplierId;
    //   }
    //   return Product.findByIdAndUpdate(id, updateData, { new: true }).populate('supplier');
    // },

    // deleteProduct: async (_, { id }) => {
    //   await Product.findByIdAndDelete(id);
    //   return Product.find().populate('supplier');
    // },
  },
};

module.exports = resolvers;