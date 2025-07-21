import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import footerStyles from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={footerStyles.root}>
      <Container sx={footerStyles.container}>
        <Box sx={footerStyles.content}>
          <Typography variant="body2" sx={footerStyles.copyright}>
            © {currentYear} Checkworthy AI. All rights reserved.
          </Typography>
          <Box sx={footerStyles.links}>
            <Link href="#" underline="none" sx={footerStyles.link}>
              Privacy
            </Link>
            <Link href="#" underline="none" sx={footerStyles.link}>
              Terms
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
