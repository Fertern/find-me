import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (
    <Dialog name={d.name} key={d.id} id={d.id} counter={d.count} />
  ));
  let messagesElements = props.dialogsPage.messages.map(m => (
    <Message key={m.id} text={m.text} />
  ));
  const messageText = React.createRef(),
    updateText = () => {
      let text = messageText.current.value;
      props.updateText(text);
    },
    sendMessage = () => {
      props.sendMessage();
    },
    sender = e => {
      if (e.keyCode === 13) {
        sendMessage();
      }
    };
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          placeholder="Write something..."
          onChange={updateText}
          onKeyDown={sender}
          ref={messageText}
          value={props.dialogsPage.messageText}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
