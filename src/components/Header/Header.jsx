import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://vignette.wikia.nocookie.net/deadspace/images/2/23/Red_Marker.png/revision/latest?cb=20190727020430"
        alt=""
      ></img>
    </header>
  );
};

export default Header;
