import { CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  IPostComment,
  IPostSingleComment,
} from "../pages/models/PostCommentModel";
import { StyledCommentCard } from "./styled/StyledComment";
import axios from "axios";
import {
  StyledCardActions,
  StyledDateContainer,
  StyledIconDelete,
  StyledIconDownVote,
  StyledIconUpVote,
  StyledLikesContainer,
  StyledLikesWrapper,
  StyledLineSeparator,
  StyledNumberOfLikesContainer,
} from "../pages/styled/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownLong,
  faTrash,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";

const PostComment = ({
  singleComment,
  commentUpVote,
  commentDownVote,
  postId,
  commentId,
  deleteComment,
  getComments,
}: IPostComment): JSX.Element => {
  const [comment, setComment] = useState<IPostSingleComment>(singleComment);

  const updateSingleComment = async (postId: string, commentId: string) => {
    try {
      const res = await axios.get(`/comments/${postId}/${commentId}`);
      const updatedComment = res.data;
      setComment({
        commentContent: updatedComment.commentBody,
        commentNumberOfLikes: updatedComment.commentNumberOfLikes,
        date: updatedComment.commentDate,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledCommentCard>
      <CardContent>
        <Typography variant="h6">{comment.commentContent}</Typography>
        <StyledDateContainer>{comment.date}</StyledDateContainer>
      </CardContent>
      <StyledLineSeparator />
      <StyledCardActions>
        <StyledLikesWrapper>
          <StyledLikesContainer>
            <StyledIconUpVote
              onClick={async () => {
                if (!commentUpVote) return;
                await commentUpVote(postId as string, commentId as string, {
                  commentBody: comment.commentContent,
                  commentNumberOfLikes: comment.commentNumberOfLikes + 1,
                  commentDate: comment.date,
                });
                if (!updateSingleComment) return;
                updateSingleComment(postId as string, commentId as string);
              }}
            >
              <FontAwesomeIcon icon={faUpLong} />
            </StyledIconUpVote>
            <StyledIconDownVote
              onClick={async () => {
                if (!commentDownVote) return;
                await commentDownVote(postId as string, commentId as string, {
                  commentBody: comment.commentContent,
                  commentNumberOfLikes: comment.commentNumberOfLikes - 1,
                  commentDate: comment.date,
                });
                if (!updateSingleComment) return;
                updateSingleComment(postId as string, commentId as string);
              }}
            >
              <FontAwesomeIcon icon={faDownLong} />
            </StyledIconDownVote>
          </StyledLikesContainer>
          <StyledNumberOfLikesContainer>
            {comment.commentNumberOfLikes}
          </StyledNumberOfLikesContainer>
        </StyledLikesWrapper>
        <StyledIconDelete
          onClick={async () => {
            if (!deleteComment) return;
            await deleteComment(postId as string, commentId as string);
            if (!getComments) return;
            getComments();
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </StyledIconDelete>
      </StyledCardActions>
    </StyledCommentCard>
  );
};

export default PostComment;
