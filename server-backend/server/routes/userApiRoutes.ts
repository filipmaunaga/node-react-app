import { Express } from 'express';

const { getUsers, createUser } = require('../controllers/userApiController');

module.exports = (app: Express) => {
  app.get('/users', getUsers);
  app.post('/users', createUser);
};
