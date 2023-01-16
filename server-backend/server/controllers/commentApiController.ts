const postComment = require("../models/commentModel");
const Post = require("../models/postModel");
import { Request, Response } from "express";
import { IComment } from "../models/commentModel";

const getComments = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(
      post.comments.sort(
        (a: IComment, b: IComment) =>
          b.commentNumberOfLikes - a.commentNumberOfLikes
      )
    );
  } catch (err) {
    res.send(err);
  }
};

const getComment = async (req: Request, res: Response) => {
  try {
    await res.send("comments");
  } catch (err) {
    res.send(err);
  }
};

const createNewComment = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    post.comments.push(req.body);
    await post.save();
    res.status(201).json(req.body);
  } catch (err) {
    res.send(err);
  }
};

const updateComment = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    comment.commentBody = req.body.commentBody;
    comment.commentNumberOfLikes = req.body.commentNumberOfLikes;
    comment.commentDate = req.body.commentDate;
    await post.save();
    res.json(comment);
  } catch (err) {
    res.send(err);
  }
};

const deleteComment = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    comment.remove();
    await post.save();
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {}
};

module.exports = {
  getComments,
  createNewComment,
  updateComment,
  deleteComment,
};
