import models, {PostInterface} from '../models/model.post'
import mongoose from 'mongoose';

interface GetPost {
    id: string
}

const resolvers = {
    Query: {
        getAllPosts: async() => {
            return await models.PostModel.find();
        },
        getPost: async(_: any, args: GetPost) => {
            return await models.PostModel.findById(args.id);
        }
    },

    Mutation: {
        createPost: async(_: any, args: PostInterface) => {
            return await models.PostModel.create(args);
        }
    }
}

export default resolvers;