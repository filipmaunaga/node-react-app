const Post = require("../models/postModel");
import { Request, Response } from "express";
import { IPost } from "../models/postModel";

const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    posts.sort((a: IPost, b: IPost) => b.numberOfLikes - a.numberOfLikes);
    res.send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (err) {
    res.send(err);
  }
};

const createNewPost = async (req: Request, res: Response) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.send(post);
  } catch (err) {
    res.send(err);
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.send(post);
  } catch (err) {
    res.send(err);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.send("Deleted successfully!");
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getPosts,
  getSinglePost,
  createNewPost,
  updatePost,
  deletePost,
};
