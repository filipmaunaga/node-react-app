import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box, styled } from "@mui/material";

export const StyledCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "1rem auto 2rem auto",
  padding: "1rem",
  minWidth: "20rem",
  width: "80%",
  backgroundColor: "#FFF",
  borderRadius: "20px",
}));

export const StyledPostTitleContainer = styled(Box)(({ theme }) => ({
  "& > h3 > a": {
    textDecoration: "none",
    color: theme.palette.grey[700],
  },
  color: theme.palette.grey[700],
}));

export const StyledLikesWrapper = styled(Box)(() => ({
  display: "flex",
}));

export const StyledLikesContainer = styled(Box)(() => ({
  display: "flex",
  width: "2rem",
  justifyContent: "space-between",
}));

export const StyledLineSeparator = styled("hr")(() => ({
  display: "flex",
  margin: "0 1rem 0 1rem",
  flexGrow: "1",
  borderTop: "solid 1px",
}));

export const StyledIconUpVote = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[600],
  "&:hover": {
    color: "#0081C9",
  },
  cursor: "pointer",
}));

export const StyledIconDownVote = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[600],
  "&:hover": {
    color: "#FF8B13",
  },
  cursor: "pointer",
}));

export const StyledCardActions = styled(CardActions)(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "1rem 1rem 0 1rem",
}));

export const StyledNumberOfLikesContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignSelf: "flex-start",
  width: "2rem",
  fontSize: "1rem",
  fontWeight: "500",
}));

export const StyledIconDelete = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[600],
  "&:hover": {
    color: "#FF0032",
  },
  cursor: "pointer",
}));

export const StyledDateContainer = styled(Box)(() => ({
  fontSize: "1rem",
  fontWeight: "300",
  fontStyle: "italic",
  textAlign: "right",
  margin: "0.5rem 1rem 0.5rem 0",
  padding: "0.5rem",
}));
