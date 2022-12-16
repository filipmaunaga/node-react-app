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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const axios_1 = __importDefault(require("axios"));
const react_2 = require("react");
const Post_1 = require("./styled/Post");
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const material_1 = require("@mui/material");
const Posts = () => {
    const [data, setData] = (0, react_2.useState)([]);
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield axios_1.default.get("/posts");
        console.log(res.data);
        setData(res.data);
    });
    (0, react_2.useEffect)(() => {
        getData();
    }, []);
    return (react_1.default.createElement("div", null, !data ? (react_1.default.createElement("p", null, "\"Loading...\"")) : (data.map((post) => (react_1.default.createElement(Post_1.StyledCard, { key: post._id },
        react_1.default.createElement(CardContent_1.default, null,
            react_1.default.createElement(material_1.Typography, { variant: "h3", gutterBottom: true }, post.postTitle),
            react_1.default.createElement(material_1.Typography, { variant: "h6" }, post.postBody))))))));
};
exports.default = Posts;
