import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator
} from "../../redux/dialogsPageReducer";

const DialogsContainer = props => {
  let updateMessageText = text => {
    let action = updateMessageTextActionCreator(text);
    props.store.dispatch(action);
  };
  let sendMessage = () => {
    let action = addMessageActionCreator();
    props.store.dispatch(action);
  };
  let state = props.store.getState().dialogsPage;
  return (
    <Dialogs
      state={state}
      updateText={updateMessageText}
      sendMessage={sendMessage}
    />
  );
};
export default DialogsContainer;
