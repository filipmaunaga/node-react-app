import { Express } from "express";

const {
  getComments,
  createNewComment,
  updateComment,
  deleteComment,
  getComment,
} = require("../controllers/commentApiController");

module.exports = (app: Express) => {
  app.get("/comments/:id", getComments);
  app.get("/comments/:id/:commentId", getComment);
  app.post("/comments/:id", createNewComment);
  app.put("/comments/:id/:commentId", updateComment);
  app.delete("/comments/:id/:commentId", deleteComment);
};
