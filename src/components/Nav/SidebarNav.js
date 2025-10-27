import * as React from "react";
import { Drawer, List, Typography, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { NavItem } from "./NavItem";
import { BarChart, Cloud, AttachMoney } from "@material-ui/icons";

const logo = new URL("../../images/logo.png", import.meta.url).href;

const DRAWER_WIDTH = 280;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    border: 'none',
    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    boxShadow: '4px 0 20px rgba(0, 0, 0, 0.08)',
  },
  logoContainer: {
    padding: '32px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    margin: '16px',
    borderRadius: '16px',
    color: 'white',
    marginBottom: '24px',
  },
  logo: {
    width: '48px',
    height: '48px',
    marginBottom: '12px',
    filter: 'brightness(0) invert(1)',
  },
  logoText: {
    fontWeight: 700,
    fontSize: '1.25rem',
    letterSpacing: '-0.025em',
    color: 'white',
  },
  logoSubtext: {
    fontSize: '0.75rem',
    opacity: 0.9,
    marginTop: '4px',
    color: 'white',
  },
  navSection: {
    padding: '0 16px',
  },
  sectionTitle: {
    padding: '16px 24px 8px',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  navList: {
    padding: '0 8px',
  },
  footer: {
    marginTop: 'auto',
    padding: '24px',
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: '16px',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
  },
}));

const SidebarNav = ({ active }) => {
  const classes = useStyles();
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    if (!init) {
      setInit(true);
    }
  }, [init]);

  const navigationItems = [
    {
      name: "Cost Allocation",
      href: "allocation",
      icon: <BarChart />,
      description: "View and analyze cost allocations"
    },
    { 
      name: "Cloud Costs", 
      href: "cloud", 
      icon: <Cloud />,
      description: "Monitor cloud infrastructure costs"
    },
    { 
      name: "External Costs", 
      href: "external-costs", 
      icon: <AttachMoney />,
      description: "Track external service costs"
    },
  ];

  return (
    <Drawer
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant="permanent"
    >
      <div className={`${classes.logoContainer} fade-in`}>
        <img
          src={logo}
          alt="OpenCost"
          className={classes.logo}
        />
        <Typography className={classes.logoText}>
          OpenCost
        </Typography>
        <Typography className={classes.logoSubtext}>
          Cost Management
        </Typography>
      </div>

      <div className={classes.navSection}>
        <Typography className={classes.sectionTitle}>
          Analytics
        </Typography>
        <List className={classes.navList}>
          {navigationItems.map((item, index) => (
            <div key={item.name} className="slide-in" style={{ animationDelay: `${index * 100}ms` }}>
              <NavItem 
                active={active === `/${item.href}`} 
                {...item} 
              />
            </div>
          ))}
        </List>
      </div>

      <div className={classes.footer}>
        <Typography className={classes.footerText}>
          © 2024 OpenCost
        </Typography>
        <Typography className={classes.footerText} style={{ marginTop: '4px' }}>
          Open Source Cost Analytics
        </Typography>
      </div>
    </Drawer>
  );
};

export { SidebarNav };
