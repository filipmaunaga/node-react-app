"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post = require("../models/postModel");
const { getPosts, getSinglePost, createNewPost, updatePost, deletePost, deleteAll, } = require("../controllers/apiController");
module.exports = (app) => {
    app.get("/posts", getPosts);
    app.get("/posts/:id", getSinglePost);
    app.post("/posts", createNewPost);
    app.put("/posts/:id", updatePost);
    app.delete("/posts/:id", deletePost);
};
