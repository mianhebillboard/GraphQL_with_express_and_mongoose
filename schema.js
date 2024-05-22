const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Supplier {
    id: ID!
    companyname: String!
    location: String!
  }

  type Product {
    id: ID!
    productname: String!
    supplier: Supplier!
    price: Int!
  }

  type OrderItem {
    id: ID!
    order: Order!
    product: Product!
    unitprice: Int!
    quantity: Int!
  }

  type Order {
    id: ID!
    orderdate: String!
    customer: Customer!
    totalamount: Int!
  }

  type Customer {
    id: ID!
    firstname: String!
    lastname: String!
    city: String!
    country: String!
    phone: Int!
  }

  type Query {
    suppliers: [Supplier]
    supplier(id: ID!): Supplier

    products: [Product]
    product(id: ID!): Product

    orderitems: [OrderItem]
    orderitem(id: ID!): OrderItem

    orders: [Order]
    order(id: ID!): Order

    customers: [Customer]
    customer(id: ID!): Customer
  }

  type Mutation {
    addCustomer(customer: AddCustomerInput!): Customer
    deleteCustomer(id: ID!): [Customer]
    updateCustomer(id: ID!, edits: EditCustomerInput!): Customer
  }

  input AddCustomerInput {
    firstname: String!
    lastname: String!
    city: String!
    country: String!
    phone: Int!
  }

  input EditCustomerInput {
    firstname: String
    lastname: String
    city: String
    country: String
    phone: Int
  }
`;

module.exports = typeDefs;