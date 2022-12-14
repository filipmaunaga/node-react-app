import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Header from "./components/Header";
import Compose from "./pages/Compose";

function App() {
  const theme = createTheme({});
  //  const [data, setData] = useState<any[]>([]);

  // const getData = async () => {
  //   const res = await axios.get("/posts");
  //   console.log(res.data);
  //   setData(res.data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/compose" element={<Compose />} />
        </Routes>
        <div>
          {/* {!data ? (
            <p>"Loading..."</p>
          ) : (
            data.map((post) => <p key={post._id}>{post.postTitle}</p>)
          )} */}
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
