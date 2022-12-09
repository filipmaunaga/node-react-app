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
};
