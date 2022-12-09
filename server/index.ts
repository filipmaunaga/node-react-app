import { Express, Request, Response } from "express";
const express = require("express");
const app: Express = express();
const cors = require("cors");
const mongoose = require("mongoose");
const apiController = require("./controllers/apiController");

app.use(cors());

require("dotenv").config({ path: "./server/config.env" });
const PORT = process.env.PORT || 3002;

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("db Connected"));

apiController(app);

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
