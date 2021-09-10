import React from "react";
import { Link } from "react-router-dom";
import menu from "Constant/menu";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MainSider() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Divider />
      <List>
        {menu.map((item, i) => (
          <ListItem button key={i} component={Link} to={item.key}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: "caption" }}
              primary={item.label}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default React.memo(MainSider);
