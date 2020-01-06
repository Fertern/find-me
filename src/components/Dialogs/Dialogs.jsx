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
        e.preventDefault();
      }
    };
  return (
    <div className={s.dialogs}>
      <div className={s.peopleArea}>
        <div className={s.item}>{dialogsElements}</div>
      </div>
      <div className={s.messageArea}>
        <div className={s.messages}>{messagesElements}</div>

        <div className={s.senderArea}>
          <div className={s.senderWrapper}>
            <div className={s.textareaWrapper}>
              <textarea
                className={s.textarea}
                placeholder="Write something..."
                onChange={updateText}
                onKeyDown={sender}
                ref={messageText}
                value={props.dialogsPage.messageText}
              ></textarea>
            </div>
            <button className={s.button} onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
