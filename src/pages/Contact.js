import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: '#0B081C',
      color: 'white',
      pt: { xs: '100px', md: '120px' },
      pb: 8,
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              mb: 2,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #A0A0A0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get in Touch
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.25rem',
              lineHeight: 1.7,
            }}
          >
            Have questions or want to learn more about our AI solutions? We'd love to hear from you.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                height: '100%',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
                Send us a Message
              </Typography>
              
              <Box component="form" sx={{ '& .MuiTextField-root': { mb: 3 } }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 0.7)' },
                      }}
                      InputProps={{
                        style: { color: 'white' },
                        sx: {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 0.7)' },
                      }}
                      InputProps={{
                        style: { color: 'white' },
                        sx: {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: 'rgba(255, 255, 255, 0.7)' },
                  }}
                  InputProps={{
                    style: { color: 'white' },
                    sx: {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: 'rgba(255, 255, 255, 0.7)' },
                  }}
                  InputProps={{
                    style: { color: 'white' },
                    sx: {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Your Message"
                  multiline
                  rows={6}
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: 'rgba(255, 255, 255, 0.7)' },
                  }}
                  InputProps={{
                    style: { color: 'white' },
                    sx: {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    },
                  }}
                />

                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    mt: 2,
                    py: 1.5,
                    background: 'linear-gradient(90deg, #6A83C2 0%, #8268E0 100%)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #5a73b0 0%, #7258c7 100%)',
                      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Paper 
                sx={{
                  p: 4,
                  flex: 1,
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                  Contact Information
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <EmailIcon sx={{ color: '#6A83C2', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 0.5 }}>
                      Email Us
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      contact@checkworthy.ai
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <PhoneIcon sx={{ color: '#6A83C2', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 0.5 }}>
                      Call Us
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <LocationOnIcon sx={{ color: '#6A83C2', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 0.5 }}>
                      Visit Us
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      123 AI Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              <Paper 
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  Follow Us
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                  Stay connected with us on social media for the latest updates and news.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                    <Button
                      key={social}
                      variant="outlined"
                      sx={{
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        textTransform: 'none',
                        '&:hover': {
                          borderColor: 'rgba(106, 131, 194, 0.5)',
                          backgroundColor: 'rgba(106, 131, 194, 0.1)',
                        },
                      }}
                    >
                      {social}
                    </Button>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
