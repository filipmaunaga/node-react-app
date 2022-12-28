import { Schema, model } from "mongoose";

export interface IComment {
  commentBody: string;
  numberOfLikes: number;
}

const postSchema = new Schema<IComment>({
  commentBody: { type: String, required: true },
  numberOfLikes: { type: Number, required: true },
});

const Post = model<IComment>("Post", postSchema);

module.exports = Post;
