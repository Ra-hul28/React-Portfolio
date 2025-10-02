import React from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  useTheme,
} from '@mui/material';

export default function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <>
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 900,
          letterSpacing: 1.5,
          textAlign: 'center',
          mt: 4,
          mb: 2,
          background: isDark
            ? 'linear-gradient(90deg, #ffb347, #ffcc33)' // warm gradient for dark
            : 'linear-gradient(90deg, #ff7e5f, #feb47b)', // soft gradient for light
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Contact Me
      </Typography>

      {/* Contact Form Container */}
      <Box
        sx={{
          p: 4,
          minHeight: '70vh',
          backgroundColor: '#121212',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: isDark
            ? '0 0 25px 2px rgba(144, 202, 249, 0.5)'
            : '0 4px 20px rgba(0,0,0,0.15)',
          border: isDark
            ? '1px solid rgba(255,255,255,0.1)'
            : '1px solid rgba(255,255,255,0.2)',
          borderRadius: 3,
          m: 4,
        }}
      >
        <Box sx={{ maxWidth: 800, width: '100%' }}>
          <Grid container spacing={3}>
            {/* Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                InputLabelProps={{ style: { color: '#90caf9' } }}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: isDark ? '#90caf9' : '#0072ff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#f50057',
                    },
                  },
                }}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email ID"
                variant="outlined"
                InputLabelProps={{ style: { color: '#90caf9' } }}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: isDark ? '#90caf9' : '#0072ff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#f50057',
                    },
                  },
                }}
              />
            </Grid>

            {/* Company Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                InputLabelProps={{ style: { color: '#90caf9' } }}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: isDark ? '#90caf9' : '#0072ff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#f50057',
                    },
                  },
                }}
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                InputLabelProps={{ style: { color: '#90caf9' } }}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: isDark ? '#90caf9' : '#0072ff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#f50057',
                    },
                  },
                }}
              />
            </Grid>

            {/* District */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="District"
                variant="outlined"
                InputLabelProps={{ style: { color: '#90caf9' } }}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: isDark ? '#90caf9' : '#0072ff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#f50057',
                    },
                  },
                }}
              />
            </Grid>

            {/* State */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="State"
                variant="outlined"
                InputLabelProps={{ style: { color: '#90caf9' } }}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: isDark ? '#90caf9' : '#0072ff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#f50057',
                    },
                  },
                }}
              />
            </Grid>

            {/* Message */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                InputLabelProps={{ style: { color: '#90caf9' } }}
                sx={{
                  textarea: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: isDark ? '#90caf9' : '#0072ff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#f50057',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: '25px',
                textTransform: 'none',
                background: isDark ? '#90caf9' : '#0072ff',
                color: '#ffffff',
                boxShadow: isDark
                  ? '0 0 12px rgba(144, 202, 249, 0.6)'
                  : '0 0 12px rgba(0, 114, 255, 0.6)',
                '&:hover': {
                  background: isDark ? '#64b5f6' : '#005ecb',
                  boxShadow: isDark
                    ? '0 0 16px rgba(144, 202, 249, 0.8)'
                    : '0 0 16px rgba(0, 114, 255, 0.8)',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
