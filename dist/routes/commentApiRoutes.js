"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getComments, createNewComment, updateComment, deleteComment, } = require("../controllers/commentApiController");
module.exports = (app) => {
    app.get("/comments/:id", getComments);
    app.post("/comments/:id", createNewComment);
    app.put("/comments/:id/:commentId", updateComment);
    app.delete("/comments/:id/:commentId", deleteComment);
};
