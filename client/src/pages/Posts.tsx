import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { StyledCard } from "./styled/Post";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const Posts = (): JSX.Element => {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const res = await axios.get("/posts");
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePlusOne = async (
    postId: string,
    data: { numberOfLikes: number }
  ) => {
    try {
      const res = await axios.put(`/posts/${postId}`, data);
      getData();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMinusOne = async (
    postId: string,
    data: { numberOfLikes: number }
  ) => {
    try {
      const res = await axios.put(`/posts/${postId}`, data);
      getData();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!data ? (
        <p>"Loading..."</p>
      ) : (
        data.map((post) => (
          <StyledCard key={post._id}>
            <CardContent>
              <p>{post.numberOfLikes}</p>
              <div
                onClick={() => {
                  handlePlusOne(post._id, {
                    numberOfLikes: post.numberOfLikes + 1,
                  });
                }}
              >
                +1
              </div>
              <div
                onClick={() => {
                  handleMinusOne(post._id, {
                    numberOfLikes: post.numberOfLikes - 1,
                  });
                }}
              >
                -1
              </div>
              {/* <div onClick={() => handleMinusOne(post._id, {numberOfLikes: post.numberOfLikes})}>-1</div> */}
              <Typography variant="h3" gutterBottom>
                {post.postTitle}
              </Typography>
              <Typography variant="h6">{post.postBody}</Typography>
            </CardContent>
          </StyledCard>
        ))
      )}
    </div>
  );
};

export default Posts;
