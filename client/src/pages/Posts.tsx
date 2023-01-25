import React from "react";
import SinglePost from "../components/SinglePost";
import {
  handlePlusOne,
  handleMinusOne,
  deletePost,
} from "../services/PostServices";
import usePosts from "../hooks/usePosts";

const Posts = (): JSX.Element => {
  const [data, setData, getData] = usePosts();

  const handleDelete = async (postId: string) => {
    await deletePost(postId);
    getData();
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
              date: post.postDate,
            }}
            handlePlusOne={handlePlusOne}
            handleMinusOne={handleMinusOne}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
