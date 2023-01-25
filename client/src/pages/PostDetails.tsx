import React from "react";
import { handlePlusOne, handleMinusOne } from "../services/PostServices";
import {
  StyledCard,
  StyledCardActions,
  StyledDateContainer,
  StyledIconDownVote,
  StyledIconUpVote,
  StyledLikesContainer,
  StyledLikesWrapper,
  StyledLineSeparator,
  StyledNumberOfLikesContainer,
  StyledPostTitleContainer,
} from "./styled/Post";
import { CardContent, Typography } from "@mui/material";
import PostComment from "../components/PostComment";
import NewComment from "../components/NewComment";
import {
  commentUpVote,
  commentDownVote,
  deleteComment,
} from "../services/CommentServices";
import useSinglePost from "../hooks/useSinglePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";

const PostDetails = (): JSX.Element => {
  const [id, data, comments, getSinglePost, getComments] = useSinglePost();

  return (
    <div>
      <StyledCard>
        <CardContent>
          <StyledPostTitleContainer>
            <Typography variant="h3" gutterBottom>
              {data.postTitle}
            </Typography>
          </StyledPostTitleContainer>
          <Typography variant="h6">{data.postBody}</Typography>
          <StyledDateContainer>{data.postDate}</StyledDateContainer>
        </CardContent>
        <StyledLineSeparator />
        <StyledCardActions>
          <StyledLikesWrapper>
            <StyledLikesContainer>
              <StyledIconUpVote
                onClick={async () => {
                  if (!handlePlusOne) return;
                  await handlePlusOne(data._id as string, {
                    numberOfLikes: data.numberOfLikes + 1,
                  });
                  getSinglePost(id as string);
                }}
              >
                <FontAwesomeIcon icon={faUpLong} />
              </StyledIconUpVote>
              <StyledIconDownVote
                onClick={async () => {
                  if (!handleMinusOne) return;
                  await handleMinusOne(data._id as string, {
                    numberOfLikes: data.numberOfLikes - 1,
                  });

                  getSinglePost(id as string);
                }}
              >
                <FontAwesomeIcon icon={faDownLong} />
              </StyledIconDownVote>
            </StyledLikesContainer>
            <StyledNumberOfLikesContainer>
              {data.numberOfLikes}
            </StyledNumberOfLikesContainer>
          </StyledLikesWrapper>
        </StyledCardActions>
      </StyledCard>

      {!comments ? (
        <p>Loading...</p>
      ) : (
        comments.map((comment: any) => (
          <PostComment
            key={comment._id}
            singleComment={{
              commentContent: comment.commentBody,
              commentNumberOfLikes: comment.commentNumberOfLikes,
              date: comment.commentDate,
            }}
            commentUpVote={commentUpVote}
            commentDownVote={commentDownVote}
            postId={id}
            commentId={comment._id}
            deleteComment={deleteComment}
            getComments={getComments}
          />
        ))
      )}
      <NewComment id={id} />
    </div>
  );
};

export default PostDetails;
