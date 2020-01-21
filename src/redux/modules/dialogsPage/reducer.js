import { SET_DIALOGS, ADD_MESSAGE } from "./selectors";

const initialState = {
  messages: [
    { id: 1, text: "I just wanna learn" },
    { id: 2, text: "You're my head" },
    { id: 3, text: "I just wanna live" },
    { id: 4, text: "You're my best" }
  ],
  dialogs: [],
  isDialogsLoaded: false
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: `f${(+new Date()).toString(16)}`,
            text: action.messageText
          }
        ]
      };
    case SET_DIALOGS:
      return {
        ...state,
        messages: action.messages,
        dialogs: action.dialogs
      };

    default:
      return state;
  }
};

export default dialogsPageReducer;
