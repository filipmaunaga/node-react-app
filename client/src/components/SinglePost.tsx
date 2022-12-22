import React, { useState } from "react";
import { CardContent, Typography } from "@mui/material";
import { IPost, ISinglePost } from "../pages/models/PostModel";
import { StyledCard } from "../pages/styled/Post";
import axios from "axios";

const SinglePost = ({ post, handlePlusOne, handleMinusOne }: ISinglePost) => {
  const [singlePost, setSinglePost] = useState<IPost>(post);

  const getSinglePost = async (postId: string) => {
    try {
      const res = await axios.get(`/posts/${postId}`);
      const updatedPost = res.data;

      setSinglePost({
        id: updatedPost._id,
        title: updatedPost.postTitle,
        content: updatedPost.postBody,
        numberOfLikes: updatedPost.numberOfLikes,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledCard>
      <CardContent>
        <p>{singlePost.numberOfLikes}</p>
        <div
          onClick={() => {
            if (!handlePlusOne) return;
            handlePlusOne(singlePost.id as string, {
              numberOfLikes: singlePost.numberOfLikes + 1,
            });
            console.log("payload", singlePost);
            getSinglePost(singlePost.id as string);
          }}
        >
          +1
        </div>
        <div
          onClick={() => {
            if (!handleMinusOne) return;
            handleMinusOne(singlePost.id as string, {
              numberOfLikes: singlePost.numberOfLikes - 1,
            });

            getSinglePost(singlePost.id as string);
          }}
        >
          -1
        </div>
        <Typography variant="h3" gutterBottom>
          {singlePost.title}
        </Typography>
        <Typography variant="h6">{singlePost.content}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default SinglePost;
