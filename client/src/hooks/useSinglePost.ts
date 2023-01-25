import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const useSinglePost = () => {
  const { id } = useParams();
  //getting post data
  const [data, setData] = useState<any>({});

  const getSinglePost = async (postId: string) => {
    const res = await axios.get(`/posts/${postId}`);
    setData(res.data);
  };

  useEffect(() => {
    getSinglePost(id as string);
  }, []);

  //getting comment data
  const [comments, setComments] = useState<any>([]);

  const getComments = async () => {
    const res = await axios.get(`/comments/${id}`);
    setComments(res.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return [id, data, comments, getSinglePost, getComments] as const;
};

export default useSinglePost;
