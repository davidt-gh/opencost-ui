import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { upperFirst } from "lodash";
import { Breadcrumbs, Typography, Chip, Box } from "@material-ui/core";
import { NavigateNext as NavigateNextIcon, Schedule as TimeIcon } from "@material-ui/icons";
import { toVerboseTimeRange } from "../util";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '16px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  breadcrumbContainer: {
    background: 'rgba(37, 99, 235, 0.05)',
    borderRadius: '12px',
    padding: '12px 16px',
    border: `1px solid ${theme.palette.divider}`,
  },
  timeChip: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontWeight: 500,
    '& .MuiChip-icon': {
      color: 'white',
    },
  },
  aggregationChip: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    fontWeight: 500,
  },
  link: {
    cursor: "pointer",
    transition: 'color 0.2s ease',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const Subtitle = ({ report, onClick }) => {
  const classes = useStyles();
  const { aggregateBy, window } = report;

  const timeRange = toVerboseTimeRange(window);
  const aggregation = aggregateBy && aggregateBy.length > 0 ? upperFirst(aggregateBy) : null;

  return (
    <Box className={classes.root}>
      <div className={classes.breadcrumbContainer}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          onClick={onClick}
        >
          <Typography className={classes.link} variant="body2">
            {timeRange}
            {aggregation && ` by ${aggregation}`}
          </Typography>
        </Breadcrumbs>
      </div>
      
      <Chip
        icon={<TimeIcon />}
        label={timeRange}
        className={classes.timeChip}
        size="small"
      />
      
      {aggregation && (
        <Chip
          label={`Grouped by ${aggregation}`}
          className={classes.aggregationChip}
          size="small"
        />
      )}
    </Box>
  );
};

export default React.memo(Subtitle);
