import { Express, Request, Response } from "express";
const express = require("express");
const app: Express = express();
const cors = require("cors");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");

app.use(cors());
app.use(express.json());

require("dotenv").config({ path: "./server/config.env" });
const PORT = process.env.PORT || 3002;

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("db Connected"));

apiRoutes(app);

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
