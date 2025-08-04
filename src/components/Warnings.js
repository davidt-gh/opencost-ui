import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { 
  Box, 
  Typography, 
  Collapse, 
  IconButton, 
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { 
  ExpandLess, 
  ExpandMore, 
  Warning as WarningIcon, 
  Info as InfoIcon, 
  Error as ErrorIcon 
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '24px',
  },
  alertPaper: {
    borderRadius: '12px',
    marginBottom: '12px',
    border: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  warningAlert: {
    backgroundColor: '#fef3c7',
    borderLeft: '4px solid #f59e0b',
  },
  errorAlert: {
    backgroundColor: '#fee2e2',
    borderLeft: '4px solid #ef4444',
  },
  infoAlert: {
    backgroundColor: '#dbeafe',
    borderLeft: '4px solid #3b82f6',
  },
  alertContent: {
    padding: '16px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  alertIcon: {
    marginTop: '2px',
  },
  warningIcon: {
    color: '#f59e0b',
  },
  errorIcon: {
    color: '#ef4444',
  },
  infoIcon: {
    color: '#3b82f6',
  },
  alertText: {
    flex: 1,
  },
  alertTitle: {
    fontWeight: 600,
    marginBottom: '4px',
    fontSize: '1rem',
  },
  warningTitle: {
    color: '#92400e',
  },
  errorTitle: {
    color: '#991b1b',
  },
  infoTitle: {
    color: '#1e40af',
  },
  alertDescription: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  warningDescription: {
    color: '#92400e',
  },
  errorDescription: {
    color: '#991b1b',
  },
  infoDescription: {
    color: '#1e40af',
  },
  expandButton: {
    padding: '4px',
    marginLeft: 'auto',
  },
  detailsList: {
    margin: '8px 0 0 0',
    paddingLeft: '16px',
    fontSize: '0.875rem',
  },
}));

const Warnings = ({ warnings = [], errors = [], infos = [] }) => {
  const classes = useStyles();
  const [expandedItems, setExpandedItems] = React.useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getItemContent = (item) => {
    // Handle both old format {primary, secondary} and new format {title, description, etc}
    if (typeof item === 'string') {
      return { title: item, description: null };
    }
    
    if (item.primary) {
      // Old format compatibility
      return {
        title: item.primary,
        description: item.secondary,
        details: item.details
      };
    }
    
    // New format
    return {
      title: item.title || item.message || 'Alert',
      description: item.description,
      details: item.details
    };
  };

  const getAlertStyles = (severity) => {
    switch (severity) {
      case 'warning':
        return {
          paper: classes.warningAlert,
          icon: classes.warningIcon,
          title: classes.warningTitle,
          description: classes.warningDescription,
          iconComponent: <WarningIcon />
        };
      case 'error':
        return {
          paper: classes.errorAlert,
          icon: classes.errorIcon,
          title: classes.errorTitle,
          description: classes.errorDescription,
          iconComponent: <ErrorIcon />
        };
      case 'info':
        return {
          paper: classes.infoAlert,
          icon: classes.infoIcon,
          title: classes.infoTitle,
          description: classes.infoDescription,
          iconComponent: <InfoIcon />
        };
      default:
        return {
          paper: classes.infoAlert,
          icon: classes.infoIcon,
          title: classes.infoTitle,
          description: classes.infoDescription,
          iconComponent: <InfoIcon />
        };
    }
  };

  const renderAlert = (items, severity) => {
    if (!items || items.length === 0) return null;

    const styles = getAlertStyles(severity);

    return items.map((item, index) => {
      const id = `${severity}-${index}`;
      const isExpanded = expandedItems[id];
      const content = getItemContent(item);
      const hasDetails = content.details && content.details.length > 0;

      return (
        <Paper 
          key={id}
          className={`${classes.alertPaper} ${styles.paper}`}
          elevation={0}
        >
          <div className={classes.alertContent}>
            <div className={`${classes.alertIcon} ${styles.icon}`}>
              {styles.iconComponent}
            </div>
            <div className={classes.alertText}>
              <Typography 
                className={`${classes.alertTitle} ${styles.title}`}
                variant="subtitle1"
              >
                {content.title}
              </Typography>
              {content.description && (
                <Typography 
                  className={`${classes.alertDescription} ${styles.description}`}
                  variant="body2"
                >
                  {content.description}
                </Typography>
              )}
              {hasDetails && (
                <Collapse in={isExpanded}>
                  <Box mt={1}>
                    <Typography variant="caption" color="textSecondary">
                      Details:
                    </Typography>
                    <ul className={classes.detailsList}>
                      {content.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>
                          <Typography variant="body2">
                            {detail}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Collapse>
              )}
            </div>
            {hasDetails && (
              <IconButton
                className={classes.expandButton}
                onClick={() => toggleExpand(id)}
                size="small"
              >
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            )}
          </div>
        </Paper>
      );
    });
  };

  const hasAnyItems = errors?.length > 0 || warnings?.length > 0 || infos?.length > 0;

  if (!hasAnyItems) {
    return null;
  }

  return (
    <Box className={`${classes.container} fade-in`}>
      {renderAlert(errors, 'error')}
      {renderAlert(warnings, 'warning')}
      {renderAlert(infos, 'info')}
    </Box>
  );
};

export default React.memo(Warnings);
