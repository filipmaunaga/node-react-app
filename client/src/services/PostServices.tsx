import axios from "axios";

export const handlePlusOne = async (
  postId: string,
  data: { numberOfLikes: number }
) => {
  try {
    const res = await axios.put(`/posts/${postId}`, data);
    //getData();
  } catch (error) {
    console.log(error);
  }
};

export const handleMinusOne = async (
  postId: string,
  data: { numberOfLikes: number }
) => {
  try {
    const res = await axios.put(`/posts/${postId}`, data);
    //getData();
  } catch (error) {
    console.log(error);
  }
};
