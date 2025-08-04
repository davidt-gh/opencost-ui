import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Chip,
  useTheme 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { 
  TrendingUp, 
  Assessment, 
  CloudQueue, 
  AttachMoney,
  Speed,
  Security
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  welcomeContainer: {
    marginBottom: '32px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    padding: '40px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      right: '-20%',
      width: '300px',
      height: '300px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      filter: 'blur(60px)',
    },
  },
  welcomeContent: {
    position: 'relative',
    zIndex: 1,
  },
  welcomeTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '12px',
    letterSpacing: '-0.025em',
  },
  welcomeSubtitle: {
    fontSize: '1.25rem',
    opacity: 0.9,
    marginBottom: '24px',
  },
  statsContainer: {
    marginTop: '24px',
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '24px',
    height: '100%',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
  },
  statIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    color: 'white',
  },
  statTitle: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '8px',
  },
  statValue: {
    fontSize: '1.875rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: '4px',
  },
  statDescription: {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
  },
  featureChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    margin: '4px',
    fontWeight: 500,
  },
}));

const DashboardWelcome = () => {
  const classes = useStyles();
  const theme = useTheme();

  const features = [
    'Real-time Monitoring',
    'Cost Optimization',
    'Multi-cloud Support',
    'Custom Reports',
    'Advanced Analytics'
  ];

  const stats = [
    {
      icon: <TrendingUp />,
      title: 'Cost Tracking',
      value: 'Active',
      description: 'Real-time cost monitoring'
    },
    {
      icon: <Assessment />,
      title: 'Analytics',
      value: 'Ready',
      description: 'Advanced cost analytics'
    },
    {
      icon: <CloudQueue />,
      title: 'Cloud Support',
      value: 'Multi',
      description: 'AWS, GCP, Azure compatible'
    },
    {
      icon: <Speed />,
      title: 'Performance',
      value: 'Optimized',
      description: 'High-speed data processing'
    }
  ];

  return (
    <Box className={`${classes.welcomeContainer} fade-in`}>
      <div className={classes.welcomeContent}>
        <Typography className={classes.welcomeTitle}>
          Welcome to OpenCost
        </Typography>
        <Typography className={classes.welcomeSubtitle}>
          Your comprehensive cloud cost management and monitoring platform
        </Typography>
        
        <Box display="flex" flexWrap="wrap" mt={2}>
          {features.map((feature) => (
            <Chip
              key={feature}
              label={feature}
              className={classes.featureChip}
              size="small"
            />
          ))}
        </Box>

        <Grid container spacing={3} className={classes.statsContainer}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={stat.title}>
              <Card 
                className={`${classes.statCard} hover-lift`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent style={{ padding: '0', paddingBottom: '0 !important' }}>
                  <div className={classes.statIcon}>
                    {stat.icon}
                  </div>
                  <Typography className={classes.statTitle}>
                    {stat.title}
                  </Typography>
                  <Typography className={classes.statValue}>
                    {stat.value}
                  </Typography>
                  <Typography className={classes.statDescription}>
                    {stat.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default DashboardWelcome;