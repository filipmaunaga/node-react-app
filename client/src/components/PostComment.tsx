import React from "react";
import { IPostComment } from "../pages/models/PostCommentModel";

const PostComment = ({
  commentContent,
  commentNumberOfLikes,
  date,
}: IPostComment) => {
  return (
    <div>
      <p>{commentContent}</p>
      <p>{commentNumberOfLikes}</p>
      <p>{date}</p>
    </div>
  );
};

export default PostComment;
