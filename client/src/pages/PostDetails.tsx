import React from "react";
import { handlePlusOne, handleMinusOne } from "../services/PostServices";
import { StyledCard } from "./styled/Post";
import { CardContent, Typography } from "@mui/material";
import PostComment from "../components/PostComment";
import NewComment from "../components/NewComment";
import {
  commentUpVote,
  commentDownVote,
  deleteComment,
} from "../services/CommentServices";
import useSinglePost from "../hooks/useSinglePost";

const PostDetails = (): JSX.Element => {
  const [id, data, comments, getSinglePost, getComments] = useSinglePost();

  return (
    <div>
      <p>{data.postTitle}</p>
      <StyledCard>
        <CardContent>
          <p>{data.numberOfLikes}</p>
          <div
            onClick={async () => {
              if (!handlePlusOne) return;
              await handlePlusOne(data._id as string, {
                numberOfLikes: data.numberOfLikes + 1,
              });
              getSinglePost(id as string);
            }}
          >
            +1
          </div>
          <div
            onClick={async () => {
              if (!handleMinusOne) return;
              await handleMinusOne(data._id as string, {
                numberOfLikes: data.numberOfLikes - 1,
              });

              getSinglePost(id as string);
            }}
          >
            -1
          </div>
          <Typography variant="h3" gutterBottom>
            {data.postTitle}
          </Typography>
          <Typography variant="h6">{data.postBody}</Typography>
          <p>{data.postDate}</p>
        </CardContent>
      </StyledCard>

      {!comments ? (
        <p>Loading...</p>
      ) : (
        comments.map((comment: any) => (
          <PostComment
            key={comment._id}
            commentContent={comment.commentBody}
            commentNumberOfLikes={comment.commentNumberOfLikes}
            date={comment.commentDate}
            commentUpVote={commentUpVote}
            commentDownVote={commentDownVote}
            postId={id}
            commentId={comment._id}
            getComments={getComments}
            deleteComment={deleteComment}
          />
        ))
      )}
      <NewComment id={id} />
    </div>
  );
};

export default PostDetails;
