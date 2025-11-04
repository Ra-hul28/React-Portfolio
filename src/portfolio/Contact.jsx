import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Grid, useTheme } from '@mui/material';

export default function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    district: '',
    state: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send message to backend
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          district: '',
          state: '',
          message: '',
        });
      } else {
        alert(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message. Try again.');
    }

    setLoading(false);
  };

  return (
    <>
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
            ? 'linear-gradient(90deg, #ffb347, #ffcc33)'
            : 'linear-gradient(90deg, #ff7e5f, #feb47b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Contact Me
      </Typography>

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
          <form onSubmit={sendEmail}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  label="Name"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#90caf9' } }}
                  sx={{
                    input: { color: '#fff' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: isDark ? '#90caf9' : '#0072ff',
                      },
                      '&:hover fieldset': { borderColor: '#f50057' },
                    },
                  }}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="Email ID"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#90caf9' } }}
                  sx={{
                    input: { color: '#fff' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: isDark ? '#90caf9' : '#0072ff',
                      },
                      '&:hover fieldset': { borderColor: '#f50057' },
                    },
                  }}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  label="Company Name"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#90caf9' } }}
                  sx={{
                    input: { color: '#fff' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: isDark ? '#90caf9' : '#0072ff',
                      },
                      '&:hover fieldset': { borderColor: '#f50057' },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  label="Phone Number"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#90caf9' } }}
                  sx={{
                    input: { color: '#fff' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: isDark ? '#90caf9' : '#0072ff',
                      },
                      '&:hover fieldset': { borderColor: '#f50057' },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  label="District"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#90caf9' } }}
                  sx={{
                    input: { color: '#fff' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: isDark ? '#90caf9' : '#0072ff',
                      },
                      '&:hover fieldset': { borderColor: '#f50057' },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  label="State"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#90caf9' } }}
                  sx={{
                    input: { color: '#fff' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: isDark ? '#90caf9' : '#0072ff',
                      },
                      '&:hover fieldset': { borderColor: '#f50057' },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
                      '&:hover fieldset': { borderColor: '#f50057' },
                    },
                  }}
                  required
                />
              </Grid>
            </Grid>

            <Box textAlign="center" mt={4}>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
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
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
