import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


const footerLinks = ['Privacy Policy', 'Terms of Service', 'Contact Us'];

function ResponsiveFooter() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 3,
        mt: 'auto',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl flex justify-between">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              <img src="delbrone.png"/>
            </Typography>
            <Typography variant="body2" color="textSecondary">
               company description
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Grid container spacing={1} textAlign="center">
              {footerLinks.map((link) => (
                <Grid item key={link}>
                  <Link href="#" variant="body2" color="textSecondary">
                    {link}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box  >
              <IconButton href="#" target="_blank" aria-label="Facebook" color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" target="_blank" aria-label="Twitter" color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" target="_blank" aria-label="Instagram" color="primary">
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" target="_blank" aria-label="GitHub" color="primary">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" sx={{ mt: 3 }}>
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} DELBRONE. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ResponsiveFooter;