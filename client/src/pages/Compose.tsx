import React, { useState } from 'react';
import axios from 'axios';
import { Button, ClickAwayListener, Tooltip, Typography } from '@mui/material';
import {
  StyledForm,
  StyledFormContainer,
  StyledFormTitle,
  StyledPostContentInput,
  StyledPostTitleInput,
  StyledSubmitButton,
} from './styled/Form';
import { IPost } from './models/PostModel';
import { useAuthStore } from '../store/auth/useAuthStore';

const Compose = (): JSX.Element => {
  const user = useAuthStore((state) => state.user);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const postDate = new Date().toLocaleDateString('en-US', options);

  const [postData, setPostData] = useState<IPost>({
    title: '',
    content: '',
    numberOfLikes: 0,
    date: postDate,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!user) return;
    e.preventDefault();

    console.log(postData);
    try {
      const data = {
        postTitle: postData.title,
        postBody: postData.content,
        numberOfLikes: postData.numberOfLikes,
        postDate: postData.date,
      };
      const res = await axios.post('/posts', data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setPostData({ ...postData, title: '', content: '' });

      handleTooltipOpen();
    } catch (err) {
      console.log(err);
    }
  };

  const [open, setOpen] = useState<boolean>(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <StyledFormContainer>
      <StyledFormTitle>
        <Typography variant="h6" component="h2" gutterBottom>
          Create a new post
        </Typography>
      </StyledFormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledPostTitleInput
          label="Post title"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setPostData({ ...postData, title: e.target.value });
          }}
          fullWidth
          required
          value={postData.title}
        />

        <StyledPostContentInput
          label="Post content"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setPostData({ ...postData, content: e.target.value });
          }}
          fullWidth
          required
          value={postData.content}
          multiline
          rows={4}
        />
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Post created successfully!"
            >
              <StyledSubmitButton variant="contained" type="submit">
                Submit
              </StyledSubmitButton>
            </Tooltip>
          </div>
        </ClickAwayListener>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Compose;
