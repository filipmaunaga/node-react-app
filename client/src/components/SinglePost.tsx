import React, { useState } from "react";
import { CardContent, Typography } from "@mui/material";
import { IPost, ISinglePost } from "../pages/models/PostModel";
import { StyledCard } from "../pages/styled/Post";
import axios from "axios";
import { Link } from "react-router-dom";

const SinglePost = ({
  post,
  handlePlusOne,
  handleMinusOne,
  handleDelete,
}: ISinglePost) => {
  const [singlePost, setSinglePost] = useState<IPost>(post);

  const updateSinglePost = async (postId: string) => {
    try {
      const res = await axios.get(`/posts/${postId}`);
      const updatedPost = res.data;
      setSinglePost({
        id: updatedPost._id,
        title: updatedPost.postTitle,
        content: updatedPost.postBody,
        numberOfLikes: updatedPost.numberOfLikes,
        date: updatedPost.postDate,
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
          onClick={async () => {
            if (!handlePlusOne) return;
            await handlePlusOne(singlePost.id as string, {
              numberOfLikes: singlePost.numberOfLikes + 1,
            });
            updateSinglePost(singlePost.id as string);
          }}
        >
          +1
        </div>
        <div
          onClick={async () => {
            if (!handleMinusOne) return;
            await handleMinusOne(singlePost.id as string, {
              numberOfLikes: singlePost.numberOfLikes - 1,
            });

            updateSinglePost(singlePost.id as string);
          }}
        >
          -1
        </div>
        <Typography variant="h3" gutterBottom>
          <Link to={`/posts/${singlePost.id}`}>{singlePost.title}</Link>
        </Typography>
        <Typography variant="h6">{singlePost.content}</Typography>
        <p>{singlePost.date}</p>
      </CardContent>
      <div
        style={{ color: "red" }}
        onClick={() => {
          if (!handleDelete) return;
          handleDelete(singlePost.id as string);
        }}
      >
        DELETE
      </div>
    </StyledCard>
  );
};

export default SinglePost;
