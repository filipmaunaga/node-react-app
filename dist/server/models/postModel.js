"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    postTitle: { type: String, required: true },
    postBody: { type: String, required: true },
});
const Post = (0, mongoose_1.model)("Post", postSchema);
module.exports = Post;
