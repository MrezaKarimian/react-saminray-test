import React from "react";
import { useAuthCtx } from "Provider/auth/auth.provider";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    marginRight: 10,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  name: {
    flexGrow: 1,
  },
  mrAuto: {
    marginLeft: "auto",
  },
}));

function MainHeader() {
  const classes = useStyles();
  const { user, actions } = useAuthCtx();
  const { handleLogout } = actions;
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Avatar alt="Remy Sharp" className={classes.orange}>
          {user?.userName.slice(0, 1)}
        </Avatar>
        <div className={classes.name}>{user?.userName}</div>
        <Button
          className={classes.mrAuto}
          variant="contained"
          onClick={handleLogout}
        >
          خروج
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(MainHeader);
