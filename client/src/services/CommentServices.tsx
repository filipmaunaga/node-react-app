import axios from "axios";

export const commentUpVote = async (
  postId: string,
  commentId: string,
  data: {
    commentBody: string;
    commentNumberOfLikes: number;
    commentDate: string;
  }
) => {
  try {
    const res = await axios.put(`/comments/${postId}/${commentId}`, data);
    //getData();
  } catch (error) {
    console.log(error);
  }
};

export const commentDownVote = async (
  postId: string,
  commentId: string,
  data: {
    commentBody: string;
    commentNumberOfLikes: number;
    commentDate: string;
  }
) => {
  try {
    const res = await axios.put(`/comments/${postId}/${commentId}`, data);
    //getData();
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (postId: string, commentId: string) => {
  try {
    const res = await axios.delete(`/comments/${postId}/${commentId}`);
  } catch (error) {
    console.log(error);
  }
};
