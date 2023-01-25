import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { IPostSingleComment } from "../pages/models/PostCommentModel";
import { StyledSubmitButton } from "../pages/styled/Form";
import {
  StyledCommentContent,
  StyledCommentForm,
  StyledCommentFormContainer,
} from "./styled/StyledComment";

const NewComment = ({ id }: any): JSX.Element => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const commentDate = new Date().toLocaleDateString("en-US", options);

  const [newComment, setNewComment] = useState<IPostSingleComment>({
    commentContent: "",
    commentNumberOfLikes: 0,
    date: commentDate,
  });

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const data = {
        commentBody: newComment.commentContent,
        commentNumberOfLikes: newComment.commentNumberOfLikes,
        commentDate: newComment.date,
      };
      const res = await axios.post(`/comments/${id}`, data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledCommentFormContainer>
      <StyledCommentForm>
        <form onSubmit={handleCommentSubmit}>
          <StyledCommentContent
            label="Write a new comment..."
            multiline
            rows={3}
            fullWidth
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => {
              setNewComment({ ...newComment, commentContent: e.target.value });
            }}
          />

          <StyledSubmitButton variant="contained" type="submit">
            Submit
          </StyledSubmitButton>
        </form>
      </StyledCommentForm>
    </StyledCommentFormContainer>
  );
};

export default NewComment;
