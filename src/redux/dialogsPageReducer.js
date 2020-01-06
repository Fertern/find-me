const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const initialState = {
  messages: [
    { id: 1, text: "I just wanna learn" },
    { id: 2, text: "You're my head" },
    { id: 3, text: "I just wanna live" },
    { id: 4, text: "You're my best" }
  ],
  dialogs: [
    { id: 1, name: "First", count: 1 },
    { id: 2, name: "Second", count: 1 },
    { id: 3, name: "Thirst", count: 1 },
    { id: 4, name: "Fourth", count: 1 }
  ],
  messageText: ""
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
            text: state.messageText
          }
        ],
        messageText: ""
      };

    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        messageText: action.text
      };

    default:
      return state;
  }
};
export const sendMessage = () => ({ type: ADD_MESSAGE }),
  updateText = text => ({
    type: UPDATE_MESSAGE_TEXT,
    text: text
  });

export default dialogsPageReducer;
