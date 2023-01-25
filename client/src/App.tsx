import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Compose from "./pages/Compose";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

function App() {
  const theme = createTheme({
    typography: {
      h3: {
        fontFamily: "'Maven Pro', sans-serif",
        fontWeight: 500,
      },
      h6: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 400,
      },
    },
  });

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
