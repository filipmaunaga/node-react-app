import { Schema, model } from 'mongoose';
import { IComment } from './commentModel';

export interface IPost {
  postTitle: string;
  postBody: string;
  numberOfLikes: number;
  postDate: string;
  comments?: IComment[];
  userId: string;
}

const postSchema = new Schema<IPost>({
  postTitle: { type: String, required: true },
  postBody: { type: String, required: true },
  numberOfLikes: { type: Number, required: true },
  postDate: { type: String, required: true },
  comments: [
    {
      commentBody: { type: String },
      commentNumberOfLikes: { type: Number },
      commentDate: { type: String },
    },
  ],
  userId: { type: String, required: true },
});

const Post = model<IPost>('Post', postSchema);

module.exports = Post;
