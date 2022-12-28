"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    commentBody: { type: String, required: true },
    numberOfLikes: { type: Number, required: true },
});
const Post = (0, mongoose_1.model)("Post", postSchema);
module.exports = Post;
