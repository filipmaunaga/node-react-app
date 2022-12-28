import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Header from "./components/Header";
import Compose from "./pages/Compose";
import Posts from "./pages/Posts";
import axios from "axios";
import PostDetails from "./pages/PostDetails";

function App() {
  const theme = createTheme({});

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/compose" element={<Compose />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
