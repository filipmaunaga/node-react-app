import axios from 'axios';
import { IUser } from '../store/auth/useAuthStore';

export const handlePlusOne = async (
  postId: string,
  user: IUser,
  data: { numberOfLikes: number }
) => {
  try {
    const res = await axios.put(`/posts/${postId}`, data, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    //getData();
  } catch (error) {
    console.log(error);
  }
};

export const handleMinusOne = async (
  postId: string,
  user: IUser,
  data: { numberOfLikes: number }
) => {
  try {
    const res = await axios.put(`/posts/${postId}`, data, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    //getData();
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (postId: string) => {
  try {
    const res = await axios.delete(`/posts/${postId}`);
  } catch (error) {
    console.log(error);
  }
};
