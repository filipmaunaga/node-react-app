"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const apiController = require("./controllers/apiController");
app.use(cors());
app.use(express.json());
require("dotenv").config({ path: "./server/config.env" });
const PORT = process.env.PORT || 3002;
mongoose
    .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
})
    .then(() => console.log("db Connected"));
apiController(app);
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
