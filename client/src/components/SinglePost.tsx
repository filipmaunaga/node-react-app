import React, { useState } from 'react';
import { CardContent, Typography } from '@mui/material';
import { IPost, ISinglePost } from '../pages/models/PostModel';
import {
  StyledCard,
  StyledCardActions,
  StyledDateContainer,
  StyledIconDelete,
  StyledIconDownVote,
  StyledIconUpVote,
  StyledLikesContainer,
  StyledLikesWrapper,
  StyledLineSeparator,
  StyledNumberOfLikesContainer,
  StyledPostTitleContainer,
} from '../pages/styled/Post';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong, faDownLong, faTrash } from '@fortawesome/free-solid-svg-icons';

const SinglePost = ({ post, handlePlusOne, handleMinusOne, handleDelete, user }: ISinglePost) => {
  const [singlePost, setSinglePost] = useState<IPost>(post);

  const updateSinglePost = async (postId: string) => {
    if (!user) return;
    try {
      const res = await axios.get(`/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const updatedPost = res.data;
      setSinglePost({
        id: updatedPost._id,
        title: updatedPost.postTitle,
        content: updatedPost.postBody,
        numberOfLikes: updatedPost.numberOfLikes,
        date: updatedPost.postDate,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledCard>
      <CardContent>
        <StyledPostTitleContainer>
          <Typography variant="h3" gutterBottom>
            <Link to={`/posts/${singlePost.id}`}>{singlePost.title}</Link>
          </Typography>
        </StyledPostTitleContainer>
        <Typography variant="h6">{singlePost.content}</Typography>
        <StyledDateContainer>{singlePost.date}</StyledDateContainer>
      </CardContent>
      <StyledLineSeparator />
      <StyledCardActions>
        <StyledLikesWrapper>
          <StyledLikesContainer>
            <StyledIconUpVote
              onClick={async () => {
                if (!user) return;
                if (!handlePlusOne) return;
                await handlePlusOne(singlePost.id as string, user, {
                  numberOfLikes: singlePost.numberOfLikes + 1,
                });
                updateSinglePost(singlePost.id as string);
              }}
            >
              <FontAwesomeIcon icon={faUpLong} />
            </StyledIconUpVote>
            <StyledIconDownVote
              onClick={async () => {
                if (!user) return;
                if (!handleMinusOne) return;
                await handleMinusOne(singlePost.id as string, user, {
                  numberOfLikes: singlePost.numberOfLikes - 1,
                });

                updateSinglePost(singlePost.id as string);
              }}
            >
              <FontAwesomeIcon icon={faDownLong} />
            </StyledIconDownVote>
          </StyledLikesContainer>
          <StyledNumberOfLikesContainer>{singlePost.numberOfLikes}</StyledNumberOfLikesContainer>
        </StyledLikesWrapper>
        <StyledIconDelete
          onClick={() => {
            if (!handleDelete) return;
            handleDelete(singlePost.id as string);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </StyledIconDelete>
      </StyledCardActions>
    </StyledCard>
  );
};

export default SinglePost;
