import mongoose, { Schema, Document } from 'mongoose';
const validator = require('validator');
const bcrypt = require('bcrypt');

export interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('Email already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error('All fields must be filled');
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error('User not found!');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Incorrect credentials!');
  }

  return user;
};

const User = mongoose.model<IUser>('User', userSchema);

module.exports = User;
