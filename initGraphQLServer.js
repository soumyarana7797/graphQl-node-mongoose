const {ApolloServer} = require("apollo-server-express")
const { GraphQLError } = require("graphql")
const depthLimit =  require("graphql-depth-limit")
const typeDefs = require("./schema");

const resolvers = require('./resolver')
const schema = require("./schema")
// const queryComplexity = require("graphql-query-complexity")
const { simpleEstimator } = require("graphql-query-complexity")
// import queryComplexity, {
//   simpleEstimator,
// } from 'graphql-query-complexity';
const {environment} = require("./config")
// import { environment,NODE_ENV, CUSTOM_ENV } from './config';

// const queryComplexityRule = queryComplexity({
//   maximumComplexity: 1000,
//   variables: {},
//   // eslint-disable-next-line no-console
//   createError: (max, actual) => new GraphQLError(`Query is too complex: ${actual}. Maximum allowed complexity: ${max}`),
//   estimators: [
//     simpleEstimator({
//       defaultComplexity: 1,
//     }),
//   ],
// });
let apolloServer
module.exports = {
    
    startApolloServer: async(middlewareObj) => {
        apolloServer = new ApolloServer({
            typeDefs,
            resolvers,
            introspection: environment !== 'production',
          //   validationRules: [depthLimit(7), queryComplexityRule],
            formatError: (err) => {
              if (err.message.startsWith('Database Error: ')) {
                return new Error('Internal server error');
              }
          
              return err;
            },
          });
    
        await apolloServer.start();
        console.log("apollo server start...")
        apolloServer.applyMiddleware(middlewareObj);
        console.log("Graphql middleware added...")

    },
    apolloServer
}


