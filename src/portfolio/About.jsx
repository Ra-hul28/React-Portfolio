import { Box, Typography, useTheme, Grid, Card, CardContent, Button } from '@mui/material';
import { useState } from 'react';

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [selectedSkill, setSelectedSkill] = useState('Frontend'); // default

  // Date box style
  const dateBoxStyles = {
    border: isDark ? '2px solid #90caf9' : '2px solid #0072ff',
    borderRadius: '12px',
    padding: '4px 14px',
    fontSize: '0.95rem',
    fontWeight: 600,
    display: 'inline-block',
    marginBottom: '10px',
    textAlign: 'center',
  };

  // Skills data (updated)
  const skillsData = {
    Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React'],
    Frameworks: ['Bootstrap', 'Material-UI', 'Styled Components'],
    Tools: ['Git', 'GitHub'],
  };

  // Reusable heading style
  const headingStyle = {
    fontWeight: 900,
    letterSpacing: 1.5,
    textAlign: 'center',
    mt: 4,
    mb: 2,
    background: isDark
      ? 'linear-gradient(90deg, #90caf9, #f50057)'
      : 'linear-gradient(90deg, #0072ff, #00c6ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  // Projects data
  const projectsData = [
    {
      title: 'Personal Portfolio Website',
      desc: 'Designed and developed a responsive personal portfolio to showcase projects and skills with interactive UI. Integrated smooth navigation with React Router for different sections (About, Skills, Projects, Education).',
      link: '' // no external link
    },
    {
      title: 'Movie App',
      desc: 'Developed a responsive Movie App with dynamic listings, scrollable category carousels, modals for movie details and favorites functionality.',
      link: 'https://ra-hul28.github.io/React-Movie-App/'
    },
    {
      title: 'Todo Application',
      desc: 'Developed a full-featured Todo app with CRUD functionality, task editing, login page and responsive navigation.',
      link: 'https://ra-hul28.github.io/React-Todo-App/'
    },
  ];

  return (
    <>
      {/* About Me heading */}
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
        About Me
      </Typography>

      <Box
        sx={{
          p: 4,
          minHeight: '80vh',
          backgroundColor: isDark ? '#121212' : '#f5f5f5',
          color: isDark ? '#ffffff' : '#000000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 3,
          m: 4,
        }}
      >
        <Box sx={{ maxWidth: 900, width: '100%' }}>
          {/* Education Section */}
          <Typography variant="h4" sx={headingStyle}>
            Education
          </Typography>

          {/* College */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={dateBoxStyles}>(2021–2025)</Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
              P.T.R College of Engineering and Technology, Madurai – 625008
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, color: '#f50057', mt: 1 }}
            >
              Bachelor of Engineering (Computer Science)
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.8 }}>
              A comprehensive undergraduate program combining theoretical
              knowledge with practical skills for the dynamic field of CSE
              including programming, software development, and more.
            </Typography>
          </Box>

          {/* Higher Secondary */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={dateBoxStyles}>(2020–2021)</Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
              APT Durairaj Nadar Higher Secondary School, Madurai – 625009
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, color: '#f50057', mt: 1 }}
            >
              +2 Computer Science Higher Secondary School
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.8 }}>
              This specialization prepares students for higher education in
              computer science and related fields.
            </Typography>
          </Box>

          {/* SSLC */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={dateBoxStyles}>(2018–2019)</Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
              Sri Vani Vidhyalaya Matriculation Higher Secondary School, Madurai
              – 625011
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, color: '#f50057', mt: 1 }}
            >
              10th SSLC
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.8 }}>
              The SSLC is pivotal as it sets the foundation for higher secondary
              education and various career paths.
            </Typography>
          </Box>

          {/* Skills Section */}
          <Typography variant="h4" sx={headingStyle}>
            Skills
          </Typography>

          {/* Buttons for skills */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            {['Frontend', 'Frameworks', 'Tools'].map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedSkill(category)}
                sx={{
                  mx: 1,
                  borderRadius: '20px',
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  padding: '6px 18px',
                  backgroundColor:
                    selectedSkill === category
                      ? (isDark ? '#90caf9' : '#0072ff')
                      : 'transparent',
                  color:
                    selectedSkill === category
                      ? '#fff'
                      : (isDark ? '#90caf9' : '#0072ff'),
                  border: `2px solid ${isDark ? '#90caf9' : '#0072ff'}`,
                  '&:hover': {
                    backgroundColor: isDark ? '#5a9bd5' : '#0056b3',
                    color: '#fff',
                  },
                }}
              >
                {category}
              </Button>
            ))}
          </Box>

          {/* Skills display */}
          <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
            {skillsData[selectedSkill].map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: isDark ? '#1e1e1e' : '#f9f9f9',
                    borderRadius: 3,
                    boxShadow: isDark
                      ? '0 0 15px rgba(144,202,249,0.3)'
                      : '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: '#f50057' }}
                    >
                      {skill}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Projects Section */}
          <Typography variant="h4" sx={headingStyle}>
            Projects
          </Typography>

          <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
            {projectsData.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: isDark ? '#1e1e1e' : '#f9f9f9',
                    borderRadius: 3,
                    boxShadow: isDark
                      ? '0 0 15px rgba(144,202,249,0.3)'
                      : '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: '#f50057', mb: 1 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {project.desc}
                    </Typography>
                    {project.link && (
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#f50057',
                          "&:hover": { backgroundColor: '#f50057' },
                          mt: 1
                        }}
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        Open
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
