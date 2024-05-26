const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// Function to start the server
async function startServer() {
  // Initialize Express
  const app = express();

  // Set up MongoDB connection
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/manufacture');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
  }

  // Initialize Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the Apollo server
  await server.start();

  // Apply Apollo middleware to Express app
  server.applyMiddleware({ app });

  // Start the Express server
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

// Call the startServer function
startServer().catch(err => {
  console.error('Error starting the server:', err.message);
});