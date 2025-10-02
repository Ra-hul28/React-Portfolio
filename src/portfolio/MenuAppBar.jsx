import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from '@mui/icons-material';

const glowAnimation = {
  '@keyframes glow': {
    from: { textShadow: '0 0 5px #00c6ff, 0 0 10px #00c6ff' },
    to: { textShadow: '0 0 10px #0072ff, 0 0 20px #0072ff' },
  },
};

export default function MenuAppBar({ toggleTheme, darkMode }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  // Updated nav items
  const navItems = ['Home', 'About', 'Contact', 'Resume'];

  const handleNavClick = (item) => {
    setDrawerOpen(false);
    if (item === 'Resume') {
      // Scroll to Download CV button inside Home
      const btn = document.querySelector('#home button');
      if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const section = document.getElementById(item.toLowerCase());
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={10}
        sx={{
          background:
            theme.palette.mode === 'dark'
              ? 'linear-gradient(90deg, #1f1f1f, #3d3d3d)'
              : 'linear-gradient(90deg, #00c6ff, #0072ff)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 900,
              letterSpacing: 1.5,
              animation: 'glow 2s ease-in-out infinite alternate',
              ...(theme.palette.mode === 'light' && {
                color: '#ffffff',
              }),
              ...glowAnimation,
            }}
          >
            RAHUL
          </Typography>

          <Tooltip title="Toggle Light/Dark Mode">
            <IconButton
              sx={{
                ml: 1,
                transition: 'all 0.3s',
                '&:hover': {
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 0 10px #90caf9'
                      : '0 0 12px #00c6ff',
                },
              }}
              onClick={toggleTheme}
              color="inherit"
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            sx={{
              m: 2,
              fontWeight: 'bold',
              textAlign: 'center',
              color: theme.palette.primary.main,
              transition: 'color 0.3s ease',
            }}
          >
            Navigation
          </Typography>
          <Divider />
          <List>
            {navItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleNavClick(text)}>
                  <ListItemText
                    primary={text}
                    sx={{
                      pl: 2,
                      fontWeight: 'bold',
                      '& span': {
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        transition: 'color 0.3s ease',
                      },
                      '&:hover span': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
