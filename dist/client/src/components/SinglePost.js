"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const Post_1 = require("../pages/styled/Post");
const axios_1 = __importDefault(require("axios"));
const SinglePost = ({ post, handlePlusOne, handleMinusOne }) => {
    const [singlePost, setSinglePost] = (0, react_1.useState)(post);
    const getSinglePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield axios_1.default.get(`/posts/${postId}`);
            const updatedPost = res.data;
            setSinglePost({
                id: updatedPost._id,
                title: updatedPost.postTitle,
                content: updatedPost.postBody,
                numberOfLikes: updatedPost.numberOfLikes,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
    return (react_1.default.createElement(Post_1.StyledCard, null,
        react_1.default.createElement(material_1.CardContent, null,
            react_1.default.createElement("p", null, singlePost.numberOfLikes),
            react_1.default.createElement("div", { onClick: () => {
                    if (!handlePlusOne)
                        return;
                    handlePlusOne(singlePost.id, {
                        numberOfLikes: singlePost.numberOfLikes + 1,
                    });
                    console.log("payload", singlePost);
                    getSinglePost(singlePost.id);
                } }, "+1"),
            react_1.default.createElement("div", { onClick: () => {
                    if (!handleMinusOne)
                        return;
                    handleMinusOne(singlePost.id, {
                        numberOfLikes: singlePost.numberOfLikes - 1,
                    });
                    getSinglePost(singlePost.id);
                } }, "-1"),
            react_1.default.createElement(material_1.Typography, { variant: "h3", gutterBottom: true }, singlePost.title),
            react_1.default.createElement(material_1.Typography, { variant: "h6" }, singlePost.content))));
};
exports.default = SinglePost;
