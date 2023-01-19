import { CardContent } from "@mui/material";
import React from "react";
import { IPostComment } from "../pages/models/PostCommentModel";
import { StyledCommentCard } from "./styled/StyledComment";

const PostComment = ({
  commentContent,
  commentNumberOfLikes,
  date,
  commentUpVote,
  commentDownVote,
  postId,
  commentId,
  getComments,
  deleteComment,
}: IPostComment): JSX.Element => {
  return (
    <StyledCommentCard>
      <CardContent>
        <p>{commentContent}</p>
        <p>{commentNumberOfLikes}</p>
        <p>{date}</p>
      </CardContent>
      <div
        onClick={async () => {
          if (!commentUpVote) return;
          await commentUpVote(postId as string, commentId as string, {
            commentBody: commentContent,
            commentNumberOfLikes: commentNumberOfLikes + 1,
            commentDate: date,
          });
          if (!getComments) return;
          getComments();
        }}
      >
        +1
      </div>
      <div
        onClick={async () => {
          if (!commentDownVote) return;
          await commentDownVote(postId as string, commentId as string, {
            commentBody: commentContent,
            commentNumberOfLikes: commentNumberOfLikes - 1,
            commentDate: date,
          });
          if (!getComments) return;
          getComments();
        }}
      >
        -1
      </div>
      <div
        style={{ color: "red" }}
        onClick={async () => {
          if (!deleteComment) return;
          await deleteComment(postId as string, commentId as string);
          if (!getComments) return;
          getComments();
        }}
      >
        DELETE
      </div>
    </StyledCommentCard>
  );
};

export default PostComment;
