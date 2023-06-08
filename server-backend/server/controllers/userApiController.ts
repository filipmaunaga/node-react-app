import { Request, Response } from 'express';

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//payload of token is the _id
const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUpUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(201).json({ message: 'User created successfully!', email, token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(201).json({ message: 'User logged in successfully!', email, token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  signUpUser,
  loginUser,
};
