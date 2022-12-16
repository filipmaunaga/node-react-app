import React, { useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import {
  StyledForm,
  StyledFormContainer,
  StyledFormTitle,
  StyledPostContent,
  StyledPostTitle,
} from "./styled/Form";
import { IPost } from "./models/PostModel";

const Compose = (): JSX.Element => {
  const [postData, setPostData] = useState<IPost>({
    title: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(postData);
    try {
      const data = {
        postTitle: postData.title,
        postBody: postData.content,
      };
      const res = await axios.post("/posts", data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledFormContainer>
      <StyledFormTitle>
        <Typography variant="h6" component="h2" gutterBottom>
          Create a new post
        </Typography>
      </StyledFormTitle>
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <StyledPostTitle
            label="Post title"
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => {
              setPostData({ ...postData, title: e.target.value });
            }}
            fullWidth
            required
          />
          <StyledPostContent
            label="Post content"
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => {
              setPostData({ ...postData, content: e.target.value });
            }}
            fullWidth
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Compose;
