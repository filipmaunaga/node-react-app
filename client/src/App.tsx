import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Compose from './pages/Compose';
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { useAuthStore } from './store/auth/useAuthStore';

const queryClient = new QueryClient();

function App() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  // Check if user is logged in
  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user') as string);

    if (localStorageUser) {
      setUser(localStorageUser);
    }
  }, []);

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
            <Route path="/" element={user ? <Posts /> : <Navigate to="/login" />} />
            <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/compose" element={<Compose />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
