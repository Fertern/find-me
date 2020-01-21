import { thunkErrorDecorator } from "../../../utils/thunkErrorDecorator";
import { dialogsAPI } from "../../../api/api";
import { SET_DIALOGS, ADD_MESSAGE } from "./selectors";

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
  if (data !== []) {
    dispatch(setDialogs(data));
  }
});
