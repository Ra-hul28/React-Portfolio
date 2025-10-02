import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import rahulImage from './Rahulimage.jpeg';
import RahulResume from './D.Rahul-resume.pdf'; // added for download functionality

const glowAnimation = {
  '@keyframes glow': {
    from: { textShadow: '0 0 5px #00c6ff, 0 0 10px #00c6ff' },
    to: { textShadow: '0 0 10px #0072ff, 0 0 20px #0072ff' },
  },
};

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        p: 4,
        minHeight: '80vh',
        backgroundColor: '#121212',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition:
          'background-color 0.5s ease, color 0.5s ease, box-shadow 0.5s ease, border 0.5s ease',
        boxShadow: isDark
          ? '0 0 25px 2px rgba(144, 202, 249, 0.5)'
          : '0 4px 20px rgba(0,0,0,0.15)',
        border: isDark
          ? '1px solid rgba(255,255,255,0.1)'
          : '1px solid rgba(255,255,255,0.2)',
        borderRadius: 3,
        m: 4,
        '&:hover': {
          boxShadow: isDark
            ? '0 0 35px 4px rgba(144, 202, 249, 0.7)'
            : '0 6px 25px rgba(0,0,0,0.2)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        component="img"
        src={rahulImage}
        alt="Profile"
        sx={{
          width: 150,
          height: 150,
          borderRadius: '50%',
          objectFit: 'cover',
          mb: 3,
          border: '4px solid white',
          animation: 'glow 2s ease-in-out infinite alternate',
          boxShadow: isDark ? '0 0 20px #90caf9' : '0 0 20px #00c6ff',
          ...glowAnimation,
        }}
      />

      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 900,
          letterSpacing: 1.5,
          animation: 'glow 2s ease-in-out infinite alternate',
          color: isDark ? '#90caf9' : '#0072ff',
          textAlign: 'center',
          transition: 'color 0.5s ease',
          ...glowAnimation,
        }}
      >
        Welcome! I’m Rahul.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: 600,
          textAlign: 'center',
          lineHeight: 1.8,
          color: '#ffffff',
          transition: 'color 0.5s ease',
        }}
      >
        A fervent Front-End Developer devoted to architecting sophisticated,
        immersive, and adaptive web interfaces. Leveraging a profound mastery of
        contemporary technologies including React, JavaScript, HTML5, and CSS3,
        I endeavor to seamlessly fuse aesthetic design with impeccable functionality.
      </Typography>

      {/* Download CV Button: only functionality added, styles untouched */}
      <Button
        variant="contained"
        href={RahulResume}
        download="D.Rahul-resume.pdf"
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          fontWeight: 'bold',
          letterSpacing: 1,
          fontSize: '1rem',
          borderRadius: '25px',
          textTransform: 'none',
          background: isDark ? '#90caf9' : '#0072ff',
          color: '#ffffff',
          boxShadow: isDark
            ? '0 0 12px rgba(144, 202, 249, 0.6)'
            : '0 0 12px rgba(0, 114, 255, 0.6)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: isDark ? '#64b5f6' : '#005ecb',
            boxShadow: isDark
              ? '0 0 16px rgba(144, 202, 249, 0.8)'
              : '0 0 16px rgba(0, 114, 255, 0.8)',
          },
        }}
      >
        Download CV
      </Button>
    </Box>
  );
}
