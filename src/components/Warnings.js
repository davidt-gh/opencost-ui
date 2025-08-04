import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Box, Typography, Collapse, IconButton } from "@material-ui/core";
import { ExpandLess, ExpandMore, Warning as WarningIcon, Info as InfoIcon, Error as ErrorIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '24px',
  },
  alert: {
    borderRadius: '12px',
    marginBottom: '12px',
    border: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    '&.MuiAlert-standardWarning': {
      backgroundColor: '#fef3c7',
      color: '#92400e',
      '& .MuiAlert-icon': {
        color: '#f59e0b',
      },
    },
    '&.MuiAlert-standardError': {
      backgroundColor: '#fee2e2',
      color: '#991b1b',
      '& .MuiAlert-icon': {
        color: '#ef4444',
      },
    },
    '&.MuiAlert-standardInfo': {
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      '& .MuiAlert-icon': {
        color: '#3b82f6',
      },
    },
  },
  alertTitle: {
    fontWeight: 600,
    marginBottom: '4px',
  },
  expandButton: {
    padding: '4px',
    marginLeft: 'auto',
  },
  alertContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    width: '100%',
  },
  alertText: {
    flex: 1,
  },
  detailsList: {
    margin: '8px 0 0 0',
    paddingLeft: '16px',
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

  const renderAlert = (items, severity, icon) => {
    if (!items || items.length === 0) return null;

    return items.map((item, index) => {
      const id = `${severity}-${index}`;
      const isExpanded = expandedItems[id];
      const hasDetails = item.details && item.details.length > 0;

      return (
        <Alert
          key={id}
          severity={severity}
          className={classes.alert}
          icon={icon}
        >
          <div className={classes.alertContent}>
            <div className={classes.alertText}>
              <AlertTitle className={classes.alertTitle}>
                {item.title || item.message || item}
              </AlertTitle>
              {item.description && (
                <Typography variant="body2">
                  {item.description}
                </Typography>
              )}
              {hasDetails && (
                <Collapse in={isExpanded}>
                  <Box mt={1}>
                    <Typography variant="caption" color="textSecondary">
                      Details:
                    </Typography>
                    <ul className={classes.detailsList}>
                      {item.details.map((detail, detailIndex) => (
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
        </Alert>
      );
    });
  };

  const hasAnyItems = errors?.length > 0 || warnings?.length > 0 || infos?.length > 0;

  if (!hasAnyItems) {
    return null;
  }

  return (
    <Box className={`${classes.container} fade-in`}>
      {renderAlert(errors, 'error', <ErrorIcon />)}
      {renderAlert(warnings, 'warning', <WarningIcon />)}
      {renderAlert(infos, 'info', <InfoIcon />)}
    </Box>
  );
};

export default React.memo(Warnings);
