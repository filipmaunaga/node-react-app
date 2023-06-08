import { Express } from 'express';
const { getUsers, signUpUser, loginUser } = require('../controllers/userApiController');

module.exports = (app: Express) => {
  app.get('/users', getUsers);
  app.post('/signup', signUpUser);
  app.post('/login', loginUser);
};
