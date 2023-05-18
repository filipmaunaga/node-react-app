import { Express, Request, Response } from 'express';
const express = require('express');
const app: Express = express();
const cors = require('cors');
const mongoose = require('mongoose');
const postApiRoutes = require('./routes/postApiRoutes');
const commentApiRoutes = require('./routes/commentApiRoutes');

app.use(cors());
app.use(express.json());

require('dotenv').config({ path: './server/config.env' });
const PORT = process.env.PORT || 3002;

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log('db Connected'));

postApiRoutes(app);

commentApiRoutes(app);

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
