import React from "react";
import loader from "../../../assets/preloader.svg";
import style from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.wrapper}>
      <img src={loader} alt="" />
    </div>
  );
};

export default Preloader;
