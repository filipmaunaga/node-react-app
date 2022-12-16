"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("@mui/material/styles");
require("./App.css");
const Header_1 = __importDefault(require("./components/Header"));
const Compose_1 = __importDefault(require("./pages/Compose"));
const Posts_1 = __importDefault(require("./pages/Posts"));
function App() {
    const theme = (0, styles_1.createTheme)({});
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(styles_1.ThemeProvider, { theme: theme },
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Posts_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/compose", element: react_1.default.createElement(Compose_1.default, null) })))));
}
exports.default = App;
