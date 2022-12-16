import React from "react";
import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/material";

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: theme.palette.warning.light,
  display: "flex",
  flexDirection: "row",
}));

export const StyledMenuItemContainer = styled(Box)(() => ({
  display: "flex",
  padding: "0.5rem 0",
  margin: "0 0.5rem",
  cursor: "pointer",
}));
