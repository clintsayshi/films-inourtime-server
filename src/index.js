const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const MoviesAPI = require("./datasources/movies-api");
const serverless = require("serverless-http");

// Create an instance of the ApolloServer
// Requires two parameters: schema definition and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    moviesAPI: new MoviesAPI(),
  }),
});

// Listen for the server
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
