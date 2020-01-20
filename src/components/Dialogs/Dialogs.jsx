import React, { useEffect } from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import SpeakerNotesOffIcon from "@material-ui/icons/SpeakerNotesOff";
import { Typography } from "@material-ui/core";

const Dialogs = ({ dialogs, messages, setUpDialogs, addNewMessage }) => {
  useEffect(() => {
    setUpDialogs();
  }, [setUpDialogs]);
  if (dialogs) {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <SpeakerNotesOffIcon
            style={{ fontSize: "200px", color: "rgb(24, 66, 95)" }}
          />
          <Typography style={{ color: "var(--primaryColor" }} variant="h4">
            No incoming messages
          </Typography>
        </div>
      </div>
    );
  }
  const dialogsElements = dialogs.map(d => (
      <Dialog name={d.name} key={d.id} id={d.id} counter={d.count} />
    )),
    messagesElements = messages.map(m => <Message key={m.id} text={m.text} />);

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
