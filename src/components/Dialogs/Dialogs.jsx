import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Thirst" },
    { id: 4, name: "Fourth" }
  ];
  let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id} />);
  let messages = [
    { id: 1, text: "I just wanna learn" },
    { id: 2, text: "You're my head" },
    { id: 3, text: "I just wanna live" },
    { id: 4, text: "You're my best" }
  ];
  let messagesElements = messages.map(m => <Message text={m.text} />);
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
