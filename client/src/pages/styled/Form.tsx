import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material";

export const StyledFormContainer = styled(Box)(() => ({
  display: "flex",
  width: "70%",
  padding: "3rem 0",
  margin: "2rem auto",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "20px",
}));

export const StyledForm = styled(Box)(() => ({
  display: "flex",
  width: "30rem",
  margin: "0 auto",
}));

export const StyledPostTitleInput = styled(TextField)(() => ({
  margin: "0.5rem 0 1rem 0",
}));

export const StyledPostContentInput = styled(TextField)(() => ({
  margin: "0.5rem 0 1rem 0",
}));

export const StyledFormTitle = styled(Box)(() => ({
  display: "flex",
  width: "30rem",
  alignItems: "flex-start",
}));

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.h3.fontFamily,
  marginTop: "1rem",
  backgroundColor: "#0081C9",
}));
