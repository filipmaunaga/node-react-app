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
const axios_1 = __importDefault(require("axios"));
const material_1 = require("@mui/material");
const Form_1 = require("./styled/Form");
const Compose = () => {
    const [postData, setPostData] = (0, react_1.useState)({
        title: "",
        content: "",
    });
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        console.log(postData);
        try {
            const data = {
                postTitle: postData.title,
                postBody: postData.content,
            };
            const res = yield axios_1.default.post("/posts", data);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    });
    return (react_1.default.createElement(Form_1.StyledFormContainer, null,
        react_1.default.createElement(Form_1.StyledFormTitle, null,
            react_1.default.createElement(material_1.Typography, { variant: "h6", component: "h2", gutterBottom: true }, "Create a new post")),
        react_1.default.createElement(Form_1.StyledForm, null,
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement(Form_1.StyledPostTitle, { label: "Post title", onChange: (e) => {
                        setPostData(Object.assign(Object.assign({}, postData), { title: e.target.value }));
                    }, fullWidth: true, required: true }),
                react_1.default.createElement(Form_1.StyledPostContent, { label: "Post content", onChange: (e) => {
                        setPostData(Object.assign(Object.assign({}, postData), { content: e.target.value }));
                    }, fullWidth: true, required: true, multiline: true, rows: 4 }),
                react_1.default.createElement(material_1.Button, { variant: "contained", type: "submit" }, "Submit")))));
};
exports.default = Compose;
