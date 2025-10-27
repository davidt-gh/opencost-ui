import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { SidebarNav } from "./Nav/SidebarNav";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    margin: "0px",
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  content: {
    display: "flex",
    flexFlow: "column",
    flexGrow: 1,
    position: "relative",
  },
  wrapper: {
    position: "relative",
    flexGrow: 1,
    padding: '40px 48px',
    overflowX: "auto",
    overflowY: "auto",
    maxWidth: "100%",
    background: 'transparent',
  },
  contentContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },
  // Responsive design
  '@media (max-width: 1024px)': {
    wrapper: {
      padding: '32px 24px',
    },
  },
  '@media (max-width: 768px)': {
    wrapper: {
      padding: '24px 16px',
    },
  },
}));

const Page = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <div className={classes.body}>
      <SidebarNav active={pathname} />
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <div className={`${classes.contentContainer} fade-in`}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
