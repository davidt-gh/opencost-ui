import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Breadcrumbs, Link, Typography, Box, Paper } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '32px',
  },
  headerContainer: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    borderRadius: '16px',
    padding: '32px',
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
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
  headerContent: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },
  titleSection: {
    flex: "1 1 auto",
  },
  headerTitle: {
    background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '8px',
    fontWeight: 700,
    letterSpacing: '-0.025em',
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginBottom: '16px',
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  breadcrumbContainer: {
    marginTop: '8px',
  },
  breadcrumbLink: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.875rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  breadcrumbCurrent: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  actionsSection: {
    flex: "0 0 auto",
    marginLeft: '24px',
  },
  decorativeElement: {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '100px',
    height: '100px',
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
    borderRadius: '50%',
    filter: 'blur(20px)',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { title, breadcrumbs, headerTitle, subtitle } = props;

  return (
    <div className={`${classes.root} fade-in`}>
      <Paper className={classes.headerContainer} elevation={0}>
        <div className={classes.decorativeElement} />
        <div className={classes.headerContent}>
          <div className={classes.titleSection}>
            {headerTitle && (
              <Typography variant="h3" className={classes.headerTitle}>
                {headerTitle}
              </Typography>
            )}
            {title && (
              <Typography variant="h4" className={classes.subtitle}>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography variant="body1" className={classes.subtitle}>
                {subtitle}
              </Typography>
            )}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className={classes.breadcrumbContainer}>
                <Breadcrumbs 
                  aria-label="breadcrumb" 
                  separator="›"
                  style={{ fontSize: '0.875rem' }}
                >
                  {breadcrumbs.slice(0, breadcrumbs.length - 1).map((b) => (
                    <Link 
                      className={classes.breadcrumbLink}
                      href={b.href} 
                      key={b.name}
                    >
                      {b.name}
                    </Link>
                  ))}
                  <Typography className={classes.breadcrumbCurrent}>
                    {breadcrumbs[breadcrumbs.length - 1].name}
                  </Typography>
                </Breadcrumbs>
              </div>
            )}
          </div>
          {props.children && (
            <div className={classes.actionsSection}>
              {props.children}
            </div>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default Header;
