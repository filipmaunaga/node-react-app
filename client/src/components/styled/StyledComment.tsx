import { Box, TextField, Card } from "@mui/material";
import { styled } from "@mui/material";

export const StyledForm = styled(Box)(() => ({
  display: "flex",
  width: "30rem",
  margin: "0 auto",
}));

export const StyledCommentContent = styled(TextField)(() => ({}));

export const StyledFormTitle = styled(Box)(() => ({
  display: "flex",
  width: "30rem",
  alignItems: "flex-start",
}));

export const StyledCommentCard = styled(Card)(() => ({
  display: "flex",
  margin: "1rem auto 2rem 1rem",
  minWidth: "20rem",
  width: "80%",
  backgroundColor: "#ECECEC",
}));

export const StyledCommentFormContainer = styled(Box)(() => ({
  display: "flex",
  margin: "1rem auto 2rem 1rem",
  minWidth: "20rem",
  width: "80%",
}));
export const StyledCommentForm = styled(Box)(() => ({
  width: "100%",
}));
