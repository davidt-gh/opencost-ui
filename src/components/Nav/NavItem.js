import * as React from "react";
import { ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 12,
    margin: '4px 0',
    padding: '12px 16px',
    cursor: "pointer",
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      transform: 'translateX(4px)',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)',
    },
    "&:before": {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 0,
      background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      transition: 'width 0.3s ease',
    },
  },
  active: {
    backgroundColor: 'rgba(37, 99, 235, 0.08)',
    color: theme.palette.primary.main,
    "&:before": {
      width: '4px',
    },
    "&:hover": {
      backgroundColor: 'rgba(37, 99, 235, 0.12)',
    },
  },
  icon: {
    minWidth: 40,
    color: theme.palette.text.secondary,
    transition: 'color 0.2s ease',
  },
  activeIcon: {
    color: theme.palette.primary.main,
    minWidth: 40,
  },
  text: {
    margin: 0,
    '& .MuiListItemText-primary': {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    '& .MuiListItemText-secondary': {
      fontSize: '0.75rem',
      lineHeight: 1.3,
      marginTop: '2px',
      opacity: 0.8,
    },
  },
  activeText: {
    '& .MuiListItemText-primary': {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
  link: {
    textDecoration: "none", 
    color: "inherit",
    display: 'block',
  },
}));

const NavItem = ({ active, href, name, onClick, secondary, title, icon, description }) => {
  const classes = useStyles();

  const listItemClasses = [classes.root];
  if (active) {
    listItemClasses.push(classes.active);
  }

  const iconClasses = active ? classes.activeIcon : classes.icon;
  const textClasses = [classes.text];
  if (active) {
    textClasses.push(classes.activeText);
  }

  const renderListItem = () => (
    <ListItem
      className={listItemClasses.join(' ')}
      onClick={(e) => {
        if (onClick) {
          onClick();
          e.stopPropagation();
        }
      }}
      selected={active}
      title={title}
      disableRipple
    >
      <ListItemIcon className={iconClasses}>
        {icon}
      </ListItemIcon>
      <ListItemText
        className={textClasses.join(' ')}
        primary={name}
        secondary={description && (
          <Typography variant="caption" color="textSecondary">
            {description}
          </Typography>
        )}
      />
    </ListItem>
  );

  return href && !active ? (
    <Link className={classes.link} to={`/${href}`}>
      {renderListItem()}
    </Link>
  ) : (
    renderListItem()
  );
};

export { NavItem };
