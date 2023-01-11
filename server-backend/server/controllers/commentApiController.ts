const postComment = require("../models/commentModel");
import { Request, Response } from "express";
import { IComment } from "../models/commentModel";

const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await postComment.find();
    comments.sort(
      (a: IComment, b: IComment) =>
        b.commentNumberOfLikes - a.commentNumberOfLikes
    );
    res.send(comments);
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
    const comment = new postComment(req.body);
    await comment.save();
    res.send(comment);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { getComments, createNewComment, getComment };
