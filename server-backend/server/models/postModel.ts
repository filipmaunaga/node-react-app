import { Schema, model } from "mongoose";

export interface IPost {
  postTitle: string;
  postBody: string;
  numberOfLikes: number;
}

const postSchema = new Schema<IPost>({
  postTitle: { type: String, required: true },
  postBody: { type: String, required: true },
  numberOfLikes: { type: Number, required: true },
});

const Post = model<IPost>("Post", postSchema);

module.exports = Post;
