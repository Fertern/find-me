import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const Header = ({ id, logout, isAuth }) => {
  return (
    <header className={style.header}>
      {isAuth && (
        <NavLink
          style={{
            color: "#18425F",
            textDecoration: "none"
          }}
          to={"/profile/" + id}
        >
          <Button
            variant="contained"
            style={{ marginRight: "5px", color: "rgb(24, 66, 95)" }}
          >
            My profile
          </Button>
        </NavLink>
      )}

      {isAuth && (
        <Button
          style={{
            color: "#18425F"
          }}
          variant="contained"
          className={style.logout}
          onClick={logout}
        >
          Logout
        </Button>
      )}
    </header>
  );
};

export default Header;
