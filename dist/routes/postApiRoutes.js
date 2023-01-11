"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getPosts, getSinglePost, createNewPost, updatePost, deletePost, } = require("../controllers/postApiController");
module.exports = (app) => {
    app.get("/posts", getPosts);
    app.get("/posts/:id", getSinglePost);
    app.post("/posts", createNewPost);
    app.put("/posts/:id", updatePost);
    app.delete("/posts/:id", deletePost);
};
