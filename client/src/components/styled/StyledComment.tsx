import { Box, TextField, Card } from "@mui/material";
import { styled } from "@mui/material";

export const StyledForm = styled(Box)(() => ({
  display: "flex",
  width: "30rem",
  margin: "0 auto",
}));

export const StyledCommentContent = styled(TextField)(({ theme }) => ({
  fontFamily: theme.typography.h3.fontFamily,
}));

export const StyledFormTitle = styled(Box)(() => ({
  display: "flex",
  width: "30rem",
  alignItems: "flex-start",
}));

export const StyledCommentCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "0.5rem auto 0.5rem auto",
  minWidth: "20rem",
  width: "70%",
  backgroundColor: "#eeeeee",
}));

export const StyledCommentFormContainer = styled(Box)(() => ({
  display: "flex",
  margin: "2rem auto 2rem auto",
  minWidth: "20rem",
  width: "70%",
  backgroundColor: "#eeeeee",
  padding: "2rem",
  boxSizing: "border-box",
}));
export const StyledCommentForm = styled(Box)(() => ({
  width: "100%",
}));
