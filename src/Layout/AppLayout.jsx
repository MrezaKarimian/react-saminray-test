import React from "react";
import MainSider from "Container/SideNav/MainSider";
import MainHeader from "Container/Header/MainHeader";
import { CssBaseline, makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    height: "600px",
    padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

function AppLayout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainHeader />
      <div>
        <nav className={classes.drawer}>
          <MainSider />
        </nav>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;
