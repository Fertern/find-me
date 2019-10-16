import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>Prof</div>
      <div className={`${s.item} ${s.active}`}>Messages</div>
    </nav>
  );
};

export default Nav;
