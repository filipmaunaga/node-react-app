const Post = require("../models/postModel");
import { Express } from "express";

const {
  getPosts,
  getSinglePost,
  createNewPost,
  updatePost,
  deletePost,
  deleteAll,
} = require("../controllers/apiController");

module.exports = (app: Express) => {
  app.get("/posts", getPosts);

  app.get("/posts/:id", getSinglePost);

  app.post("/posts", createNewPost);

  app.put("/posts/:id", updatePost);

  app.delete("/posts/:id", deletePost);
};
