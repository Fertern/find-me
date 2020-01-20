import { thunkErrorDecorator } from "../Utils/thunkErrorDecorator";
import { dialogsAPI } from "../api/api";

const SET_DIALOGS = "/dialogsPage/SET-DIALOGS";
const ADD_MESSAGE = "/dialogsPage/ADD-MESSAGE";

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

export const sendMessage = messageText => ({ type: ADD_MESSAGE, messageText }),
  setDialogs = (dialogs, messages) => ({
    type: SET_DIALOGS,
    dialogs,
    messages
  });

export const addNewMessage = thunkErrorDecorator(values => async dispatch => {
  let data = { resultCode: 0 };
  if (data.resultCode === 0) {
    dispatch(sendMessage(values.message));
  }
});
export const setUpDialogs = thunkErrorDecorator(() => async dispatch => {
  let data = await dialogsAPI.getDialogs();
  if (data === []) {
    console.log(data);
  }
});

export default dialogsPageReducer;
