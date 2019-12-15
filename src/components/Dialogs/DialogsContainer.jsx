import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator
} from "../../redux/dialogsPageReducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let updateMessageText = text => {
          let action = updateMessageTextActionCreator(text);
          store.dispatch(action);
        };
        let sendMessage = () => {
          let action = addMessageActionCreator();
          store.dispatch(action);
        };
        let state = store.getState().dialogsPage;
        return (
          <Dialogs
            state={state}
            updateText={updateMessageText}
            sendMessage={sendMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;
