import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item}>
          <Dialog name="First" id="1" />
          <Dialog name="Second" id="2" />
          <Dialog name="Third" id="3" />
          <Dialog name="Fourth" id="4" />
        </div>
      </div>
      <div className={s.messages}>
        <Message text="Another bite the dust" />
        <Message text="Another bite the dust" />
        <Message text="Another bite the dust" />
        <Message text="Another bite the dust" />
      </div>
    </div>
  );
};

export default Dialogs;
