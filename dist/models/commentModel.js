"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    commentBody: { type: String, required: true },
    commentNumberOfLikes: { type: Number, required: true },
    commentDate: { type: String, required: true },
});
const postComment = (0, mongoose_1.model)("Comment", commentSchema);
module.exports = postComment;
