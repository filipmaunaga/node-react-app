import { Schema, model } from "mongoose";

export interface IComment {
  commentBody: string;
  commentNumberOfLikes: number;
  commentDate: string;
}

const commentSchema = new Schema<IComment>({
  commentBody: { type: String, required: true },
  commentNumberOfLikes: { type: Number, required: true },
  commentDate: { type: String, required: true },
});

const postComment = model<IComment>("Comment", commentSchema);

module.exports = postComment;
