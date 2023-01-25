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
const Post = require("../models/postModel");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Post.find();
        posts.sort((a, b) => b.numberOfLikes - a.numberOfLikes);
        res.send(posts);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
const getSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.findById(req.params.id);
        res.send(post);
    }
    catch (err) {
        res.send(err);
    }
});
const createNewPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = new Post(req.body);
        yield post.save();
        res.send(post);
    }
    catch (err) {
        res.send(err);
    }
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.findByIdAndUpdate(req.params.id, req.body);
        res.send(post);
    }
    catch (err) {
        res.send(err);
    }
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.findByIdAndDelete(req.params.id);
        res.send("Deleted successfully!");
    }
    catch (err) {
        res.send(err);
    }
});
module.exports = {
    getPosts,
    getSinglePost,
    createNewPost,
    updatePost,
    deletePost,
};
