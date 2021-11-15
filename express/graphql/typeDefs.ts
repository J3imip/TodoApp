import { gql } from 'apollo-server-express';

const typeDefs = gql`
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

export default typeDefs;