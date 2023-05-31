import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Compose from "./pages/Compose";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import {QueryClient,
QueryClientProvider} from 'react-query';
import SignUp from "./pages/SignUp";

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/compose" element={<Compose />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </ThemeProvider>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
