"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCard = void 0;
const Card_1 = __importDefault(require("@mui/material/Card"));
const material_1 = require("@mui/material");
exports.StyledCard = (0, material_1.styled)(Card_1.default)(() => ({
    display: "flex",
    margin: "1rem auto 2rem 1rem",
    minWidth: "20rem",
    width: "80%",
    backgroundColor: "#FFF8E1",
}));
