import { NextFunction, Request, Response } from 'express';
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

export interface IAuthRequest extends Request {
  user: any;
}

const requireAuth = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  // verify if user is authenticated

  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization?.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    // we need to coerce query result to object, otherwise it would be undefined
    const result = await User.findById({ _id }).select('_id');
    req.user = result;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

module.exports = requireAuth;
