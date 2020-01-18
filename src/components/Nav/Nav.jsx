import React from "react";
import s from "./Nav.module.css";
//import Friends from "../Friends/Friends";
import { NavLink } from "react-router-dom";
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/core/styles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { useStyles } from "./NavMaterilal";

const Nav = () => {
  const { paper, item, icon } = useStyles();
  return (
    <div className={s.wrapper}>
      <nav>
        {/* <ThemeProvider theme={blueTheme}> */}
        <Paper className={paper}>
          <MenuList>
            <MenuItem>
              <NavLink
                className={item}
                activeClassName={s.active}
                to="/profile"
              >
                <AccountBoxIcon className={icon} />
                <span>Profiles</span>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                className={item}
                activeClassName={s.active}
                to="/dialogs"
              >
                <ChatIcon className={icon} />
                <span>Messages</span>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink className={item} activeClassName={s.active} to="/users">
                <PeopleAltIcon className={icon} />
                <span>Users</span>
              </NavLink>
            </MenuItem>
          </MenuList>
        </Paper>
        {/* </ThemeProvider> */}
      </nav>
      <MobileNavBar />
    </div>
  );
};

export default Nav;
