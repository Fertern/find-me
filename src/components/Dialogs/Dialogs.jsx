import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(d => (
    <Dialog name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map(m => (
    <Message text={m.text} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
