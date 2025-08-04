import React from 'react';
import { Typography, Box, Container, Grid, Link, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { GitHub, Language, Book } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    color: 'white',
    marginTop: 'auto',
    padding: '48px 0 32px',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
    },
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '12px',
    background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '24px',
    lineHeight: 1.6,
  },
  sectionTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '16px',
    color: 'white',
  },
  link: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#60a5fa',
    },
  },
  linkIcon: {
    marginRight: '8px',
    fontSize: '1.125rem',
  },
  copyright: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.875rem',
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  decorativeElement: {
    position: 'absolute',
    bottom: '-100px',
    right: '-100px',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.decorativeElement} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography className={classes.logo}>
              OpenCost
            </Typography>
            <Typography className={classes.description}>
              Open source cost management and monitoring for cloud infrastructure. 
              Get real-time insights into your Kubernetes and cloud costs.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography className={classes.sectionTitle}>
              Resources
            </Typography>
            <Link 
              href="https://opencost.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className={classes.link}
            >
              <Language className={classes.linkIcon} />
              Official Website
            </Link>
            <Link 
              href="https://docs.opencost.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className={classes.link}
            >
              <Book className={classes.linkIcon} />
              Documentation
            </Link>
            <Link 
              href="https://github.com/opencost/opencost" 
              target="_blank" 
              rel="noopener noreferrer"
              className={classes.link}
            >
              <GitHub className={classes.linkIcon} />
              GitHub Repository
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography className={classes.sectionTitle}>
              Features
            </Typography>
            <Typography className={classes.description}>
              • Real-time cost allocation<br />
              • Multi-cloud support<br />
              • Kubernetes native<br />
              • Custom reporting<br />
              • Cost optimization insights
            </Typography>
          </Grid>
        </Grid>

        <Typography className={classes.copyright}>
          © {new Date().getFullYear()} OpenCost - Open Source Cost Management Platform
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
