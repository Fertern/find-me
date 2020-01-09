import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
const Dialogs = props => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => (
      <Dialog name={d.name} key={d.id} id={d.id} counter={d.count} />
    )),
    messagesElements = props.dialogsPage.messages.map(m => (
      <Message key={m.id} text={m.text} />
    ));
  const addNewMessage = values => {
    props.sendMessage(values.message);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.peopleArea}>
        <div className={s.item}>{dialogsElements}</div>
      </div>
      <div className={s.messageArea}>
        <div className={s.messages}>{messagesElements}</div>

        <div className={s.senderArea}>
          <AddMessageForm onSubmit={addNewMessage} />
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
