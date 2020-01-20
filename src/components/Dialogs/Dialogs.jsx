import React, { useEffect } from "react";
import style from "./Dialogs.module.css";
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
  const dialogsElements = dialogs.map(dialog => (
      <Dialog
        name={dialog.name}
        key={dialog.id}
        id={dialog.id}
        counter={dialog.count}
      />
    )),
    messagesElements = messages.map(message => (
      <Message key={message.id} text={message.text} />
    ));

  return (
    <div className={style.dialogs}>
      <div className={style.peopleArea}>
        <div className={style.item}>{dialogsElements}</div>
      </div>
      <div className={style.messageArea}>
        <div className={style.messages}>{messagesElements}</div>

        <div className={style.senderArea}>
          <AddMessageForm addNewMessage={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
