import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SinglePost from "../components/SinglePost";

const Posts = (): JSX.Element => {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const res = await axios.get("/posts");

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
      //getData();
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
      //getData();
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
          <SinglePost
            key={post._id}
            post={{
              id: post._id,
              title: post.postTitle,
              content: post.postBody,
              numberOfLikes: post.numberOfLikes,
            }}
            handlePlusOne={handlePlusOne}
            handleMinusOne={handleMinusOne}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
