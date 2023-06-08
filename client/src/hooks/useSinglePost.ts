import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IUser } from '../store/auth/useAuthStore';

const useSinglePost = (user: IUser) => {
  const { id } = useParams();
  //getting post data
  const [data, setData] = useState<any>({});

  const getSinglePost = async (postId: string) => {
    const res = await axios.get(`/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setData(res.data);
  };

  //getting comment data
  const [comments, setComments] = useState<any>([]);

  const getComments = async () => {
    const res = await axios.get(`/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setComments(res.data);
  };

  return [id, data, comments, getSinglePost, getComments] as const;
};

export default useSinglePost;
