import { CardContent } from "@mui/material";
import React from "react";
import { IPostComment } from "../pages/models/PostCommentModel";
import { StyledCommentCard } from "./styled/StyledComment";

const PostComment = ({
  commentContent,
  commentNumberOfLikes,
  date,
}: IPostComment): JSX.Element => {
  return (
    <StyledCommentCard>
      <CardContent>
        <p>{commentContent}</p>
        <p>{commentNumberOfLikes}</p>
        <p>{date}</p>
      </CardContent>
    </StyledCommentCard>
  );
};

export default PostComment;
