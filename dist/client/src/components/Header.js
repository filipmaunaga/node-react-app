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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Layout_1 = require("./styled/Layout");
const react_router_dom_1 = require("react-router-dom");
const Header = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const menuItems = [
        {
            itemName: "Posts",
            itemPath: "/",
        },
        {
            itemName: "Compose",
            itemPath: "/compose",
        },
    ];
    const redirect = (path) => {
        navigate(path);
    };
    return (React.createElement(Layout_1.StyledHeader, null,
        React.createElement("div", null, "Logo"),
        menuItems.map((item) => (React.createElement(Layout_1.StyledMenuItemContainer, { key: item.itemName, onClick: () => redirect(item.itemPath) },
            React.createElement("p", null, item.itemName))))));
};
exports.default = Header;
