import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import MenuAppBar from './portfolio/MenuAppBar';
import Home from './portfolio/Home';
import About from './portfolio/About';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#0072ff',
      },
      background: {
        default: darkMode ? '#121212' : '#1a1a1a', 
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <MenuAppBar toggleTheme={toggleTheme} darkMode={darkMode} />
        <br />
        <br />

        <Box id="home">
          <Home />
        </Box>
        <br />
        <br />
        <Box id="about">
          <About />
        </Box>
        <br />
        <br />
        <Box id="contact">
          <Contact />
        </Box>
        <br />
        <br />

        <Footer />
      </Box>
    </ThemeProvider>
  );
}


