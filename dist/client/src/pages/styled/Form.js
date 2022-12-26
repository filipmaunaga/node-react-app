"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledFormTitle = exports.StyledPostContent = exports.StyledPostTitle = exports.StyledForm = exports.StyledFormContainer = void 0;
const material_1 = require("@mui/material");
const material_2 = require("@mui/material");
exports.StyledFormContainer = (0, material_2.styled)(material_1.Box)(() => ({
    display: "flex",
    width: "100%",
    padding: "3rem 0",
    margin: "0 auto",
    flexDirection: "column",
    alignItems: "center",
}));
exports.StyledForm = (0, material_2.styled)(material_1.Box)(() => ({
    display: "flex",
    width: "30rem",
    margin: "0 auto",
}));
exports.StyledPostTitle = (0, material_2.styled)(material_1.TextField)(() => ({
    margin: "0.5rem 0 1rem 0",
}));
exports.StyledPostContent = (0, material_2.styled)(material_1.TextField)(() => ({
    margin: "0.5rem 0 1rem 0",
}));
exports.StyledFormTitle = (0, material_2.styled)(material_1.Box)(() => ({
    display: "flex",
    width: "30rem",
    alignItems: "flex-start",
}));
