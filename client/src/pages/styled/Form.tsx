import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material";

export const StyledFormContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  padding: "3rem 0",
  margin: "0 auto",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledForm = styled(Box)(() => ({
  display: "flex",
  width: "30rem",
  margin: "0 auto",
}));

export const StyledPostTitle = styled(TextField)(() => ({
  margin: "0.5rem 0 1rem 0",
}));

export const StyledPostContent = styled(TextField)(() => ({
  margin: "0.5rem 0 1rem 0",
}));

export const StyledFormTitle = styled(Box)(() => ({
  display: "flex",
  width: "30rem",
  alignItems: "flex-start",
}));
