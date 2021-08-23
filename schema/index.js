const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = gql`
type Query {
    employee(id: Int!): Employee
    employees: [Employee],
  }
  type Mutation {
      createEmployee(name: String!, department: String!): Employee,
      deleteEmployee(id: Int!): DeleteEmployeeResponse
  }
  input EmployeeInput {
      name: String!,
      department: String!
  }
  type DeleteEmployeeResponse {
    id: Int!
  }
  type Employee {
    _id: String,
    name: String,
    performance: String
  }
`;
module.exports = typeDefs
// const { buildSchema } = require('graphql');
// const graphqlHTTP = require('express-graphql');
// const { getUserTeamContests } = require('../routes/rest/v1/dffUserTeamContest/fetch')
// const schema = buildSchema(`
// type Query {
//   employee(id: Int!): Employee
//   employees: [Employee],
// }
// type Mutation {
//     createEmployee(name: String!, department: String!): Employee,
//     deleteEmployee(id: Int!): DeleteEmployeeResponse
// }
// input EmployeeInput {
//     name: String!,
//     department: String!
// }
// type DeleteEmployeeResponse {
//   id: Int!
// }
// type Employee {
//   id: Int!,
//   name: String!,
//   department: String!
// }
// `);
// const root = {
//   employee: graphqlInput => employeesService.getById(graphqlInput && graphqlInput.id),
//   employees: getUserTeamContests,
//   createEmployee: graphqlInput => employeesService.save(graphqlInput),
//   deleteEmployee: graphqlInput => employeesService.deleteById(graphqlInput.id),
// };

// const graphql = graphqlHTTP({
//   schema,
//   rootValue: root,
//   graphiql: true,
// });

// module.exports = graphql;