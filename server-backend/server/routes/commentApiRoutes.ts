import { Express } from "express";

const {
  getComments,
  createNewComment,
  getComment,
} = require("../controllers/commentApiController");

module.exports = (app: Express) => {
  app.get("/comments", getComment);
  app.get("/posts/:id/comments", getComments);
  app.post("/posts/:id/comments", createNewComment);
};
