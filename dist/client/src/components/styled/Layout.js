"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledMenuItemContainer = exports.StyledHeader = void 0;
const material_1 = require("@mui/material");
const material_2 = require("@mui/material");
exports.StyledHeader = (0, material_2.styled)(material_1.AppBar)(({ theme }) => ({
    position: "static",
    backgroundColor: theme.palette.warning.light,
    display: "flex",
    flexDirection: "row",
}));
exports.StyledMenuItemContainer = (0, material_2.styled)(material_1.Box)(() => ({
    display: "flex",
    padding: "0.5rem 0",
    margin: "0 0.5rem",
    cursor: "pointer",
}));
