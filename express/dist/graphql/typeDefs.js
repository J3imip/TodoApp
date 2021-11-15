"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Post {
    id: ID
    title: String
    description: String
    likes: Int
    views: Int
    author: String
    date: Int
  }

  #Queries
  type Query {
    getAllPosts: [Post!]!
    getPost(id: ID): Post!
  }

  #Mutations
  type Mutation {
    createPost(
      title:String!
      description:String!
      likes:Int!
      views:Int!
      author:String!
      date: Int!
    ): Post!
  }
`;
exports.default = typeDefs;
