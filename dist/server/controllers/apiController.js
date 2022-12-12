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
module.exports = (app) => {
    app.get("/insert-initial-data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const starterPosts = [
                {
                    postTitle: "First post",
                    postBody: "Adding some seed data",
                },
                {
                    postTitle: "Second post",
                    postBody: "More seed data",
                },
                {
                    postTitle: "Third post",
                    postBody: "Bit more",
                },
            ];
            Post.insertMany(starterPosts, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Successfully added posts to the collection");
                }
            });
            res.send("Initialized data");
        }
        catch (err) {
            res.send(err);
        }
    }));
    app.get("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const posts = yield Post.find();
            res.send(posts);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }));
    app.post("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const post = new Post(req.body);
            yield post.save();
            res.send(post);
        }
        catch (err) {
            res.send(err);
        }
    }));
    app.put("/posts/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const post = yield Post.findByIdAndUpdate(req.params.id, req.body);
            res.send(post);
        }
        catch (err) {
            res.send(err);
        }
    }));
    app.delete("/posts/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const post = yield Post.findByIdAndDelete(req.params.id);
            res.send("Deleted successfully!");
        }
        catch (err) {
            res.send(err);
        }
    }));
};
