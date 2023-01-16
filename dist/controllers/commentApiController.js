"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const postComment = require("../models/commentModel");
const Post = require("../models/postModel");
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.findById(req.params.id);
        if (!post)
            return res.status(404).json({ message: "Post not found" });
        res.json(post.comments.sort((a, b) => b.commentNumberOfLikes - a.commentNumberOfLikes));
    }
    catch (err) {
        res.send(err);
    }
});
const getComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.send("comments");
    }
    catch (err) {
        res.send(err);
    }
});
const createNewComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.findById(req.params.id);
        if (!post)
            return res.status(404).json({ message: "Post not found" });
        post.comments.push(req.body);
        yield post.save();
        res.status(201).json(req.body);
    }
    catch (err) {
        res.send(err);
    }
});
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.findById(req.params.id);
        if (!post)
            return res.status(404).json({ message: "Post not found" });
        const comment = post.comments.id(req.params.commentId);
        if (!comment)
            return res.status(404).json({ message: "Comment not found" });
        comment.commentBody = req.body.commentBody;
        comment.commentNumberOfLikes = req.body.commentNumberOfLikes;
        comment.commentDate = req.body.commentDate;
        yield post.save();
        res.json(comment);
    }
    catch (err) {
        res.send(err);
    }
});
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.findById(req.params.id);
        if (!post)
            return res.status(404).json({ message: "Post not found" });
        const comment = post.comments.id(req.params.commentId);
        if (!comment)
            return res.status(404).json({ message: "Comment not found" });
        comment.remove();
        yield post.save();
        res.json({ message: "Comment deleted successfully" });
    }
    catch (err) { }
});
module.exports = {
    getComments,
    createNewComment,
    updateComment,
    deleteComment,
};
