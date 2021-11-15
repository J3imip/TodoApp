import mongoose, { Schema } from 'mongoose';

export interface PostInterface {
    title: string,
    description: string,
    likes: number,
    views: number,
    author: string,
    date: number
}

const Post = new Schema<PostInterface>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
})


const PostModel = mongoose.model('posts', Post);
export default {PostModel};