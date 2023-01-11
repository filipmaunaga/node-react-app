"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getComments, createNewComment, getComment, } = require("../controllers/commentApiController");
module.exports = (app) => {
    app.get("/comments", getComment);
    app.get("/posts/:id/comments", getComments);
    app.post("/posts/:id/comments", createNewComment);
};
