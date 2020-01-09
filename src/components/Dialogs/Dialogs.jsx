import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
const Dialogs = props => {
  const { dialogsPage, addNewMessage } = props;
  const dialogsElements = dialogsPage.dialogs.map(d => (
      <Dialog name={d.name} key={d.id} id={d.id} counter={d.count} />
    )),
    messagesElements = dialogsPage.messages.map(m => (
      <Message key={m.id} text={m.text} />
    ));

  return (
    <div className={s.dialogs}>
      <div className={s.peopleArea}>
        <div className={s.item}>{dialogsElements}</div>
      </div>
      <div className={s.messageArea}>
        <div className={s.messages}>{messagesElements}</div>

        <div className={s.senderArea}>
          <AddMessageForm addNewMessage={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
// sender = e => {
//   if (e.keyCode === 13) {
//     addNewMessage();
//     e.preventDefault();
//   }
// },
