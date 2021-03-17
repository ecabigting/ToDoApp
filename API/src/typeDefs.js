import { gql } from "apollo-server-express";

const { GraphQLScalarType, Kind } = require('graphql');


export const typeDefs = gql`
        scalar Date

        type Query {
            apicheck: String!
            todos: [ToDo!]!
        }

        type ToDo {
            id: ID!,
            task: String!,
            completed: Boolean,
            createddate: Date,
            lastupdateddate: Date
        }

        type Mutation {
            createToDo(task: String!,completed: Boolean) : ToDo!
            editTodo(id:ID,task:String,completed:Boolean) : ToDo!
            deleteToDo(id:ID) : ToDo!
            updateToDoStatus(id:ID,completed:Boolean) : ToDo!
        }
`;

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
      return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
      }
      return null; // Invalid hard-coded value (not an integer)
    },
  });