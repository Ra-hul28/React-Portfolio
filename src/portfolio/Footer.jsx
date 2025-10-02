import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        textAlign: 'center',
        mt: 4,
        background: isDark ? '#1e1e1e' : '#111111', // luxury dark for light mode
        color: '#ffffff',
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)'}`,
      }}
    >
      {/* Social Icons */}
      <Box sx={{ mb: 1 }}>
        <IconButton
          component="a"
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#90caf9', mx: 1 }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#90caf9', mx: 1 }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:yourmail@example.com"
          sx={{ color: '#90caf9', mx: 1 }}
        >
          <Email />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        © {new Date().getFullYear()} Rahul | All Rights Reserved
      </Typography>
    </Box>
  );
}
