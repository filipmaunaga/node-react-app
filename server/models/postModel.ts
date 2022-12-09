import { Schema, model, connect } from "mongoose";

interface IPost {
  postTitle: string;
  postBody: string;
}

const postSchema = new Schema<IPost>({
  postTitle: { type: String, required: true },
  postBody: { type: String, required: true },
});

const Post = model<IPost>("Post", postSchema);

module.exports = Post;
