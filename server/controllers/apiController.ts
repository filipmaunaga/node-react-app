const Post = require("../models/postModel");
import { Express, Request, Response } from "express";

module.exports = (app: Express) => {
  app.get("/insert-initial-data", async (req: Request, res: Response) => {
    try {
      const starterPosts = [
        {
          postTitle: "First post",
          postBody: "Adding some seed data",
        },
        {
          postTitle: "Second post",
          postBody: "More seed data",
        },
        {
          postTitle: "Third post",
          postBody: "Bit more",
        },
      ];

      Post.insertMany(starterPosts, (err: Error) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully added posts to the collection");
        }
      });

      res.send("Initialized data");
    } catch (err) {
      res.send(err);
    }
  });

  app.get("/posts", async (req: Request, res: Response) => {
    try {
      const posts = await Post.find();
      res.send(posts);
    } catch (err) {
      res.status(500).send(err);
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
