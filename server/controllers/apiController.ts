const Post = require("../models/postModel");
import { Express, Request, Response } from "express";
import { IPost } from "../../client/src/pages/models/PostModel";

module.exports = (app: Express) => {
  app.get("/posts", async (req: Request, res: Response) => {
    try {
      const posts = await Post.find();
      posts.sort((a: IPost, b: IPost) => b.numberOfLikes - a.numberOfLikes);
      res.send(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get("/posts/:id", async (req: Request, res: Response) => {
    try {
      const post = await Post.findById(req.params.id);
      res.send(post);
    } catch (err) {
      res.send(err);
    }
  });

  app.post("/posts", async (req: Request, res: Response) => {
    try {
      const post = new Post(req.body);
      await post.save();
      res.send(post);
    } catch (err) {
      res.send(err);
    }
  });

  app.put("/posts/:id", async (req: Request, res: Response) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body);
      res.send(post);
    } catch (err) {
      res.send(err);
    }
  });

  app.delete("/posts/:id", async (req: Request, res: Response) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      res.send("Deleted successfully!");
    } catch (err) {
      res.send(err);
    }
  });
};
