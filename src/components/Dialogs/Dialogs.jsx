import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsData = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Thirst" },
    { id: 4, name: "Fourth" }
  ];
  let messagesData = [
    { id: 1, message: "I just wanna learn" },
    { id: 2, message: "You're my head" },
    { id: 3, message: "I just wanna live" },
    { id: 4, message: "You're my best" }
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item}>
          <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
          <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
          <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
          <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
        </div>
      </div>
      <div className={s.messages}>
        <Message text={messagesData[0].message} />
        <Message text={messagesData[1].message} />
        <Message text={messagesData[2].message} />
        <Message text={messagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
