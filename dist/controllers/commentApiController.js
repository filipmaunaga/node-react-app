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
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield postComment.find();
        comments.sort((a, b) => b.commentNumberOfLikes - a.commentNumberOfLikes);
        res.send(comments);
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
        const comment = new postComment(req.body);
        yield comment.save();
        res.send(comment);
    }
    catch (err) {
        res.send(err);
    }
});
module.exports = { getComments, createNewComment, getComment };
