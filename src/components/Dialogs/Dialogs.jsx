import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(d => (
    <Dialog name={d.name} id={d.id} counter={d.count} />
  ));
  let messagesElements = props.state.messages.map(m => (
    <Message text={m.text} />
  ));
  let messageText = React.createRef();
  let updateText = () => {
    let text = messageText.current.value;
    props.updateMessageText(text);
  };
  let sendMessage = () => {
    props.addMessage();
  };
  let sender = e => {
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
          onChange={updateText}
          onKeyDown={sender}
          ref={messageText}
          value={props.state.messageText}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
