import axios from 'axios';
import { IUserCredentials } from '../pages/models/UserCredentialsModel';

export const signUpUser = async ({ email, password }: IUserCredentials) => {
  return axios.post('/signup', { email, password }).then((res) => res.data);
};

export const loginUser = async ({ email, password }: IUserCredentials) => {
  return axios.post('/login', { email, password }).then((res) => res.data);
};
