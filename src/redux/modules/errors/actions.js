import { NEW_ERROR, DELETE_ERROR } from "./selectors";

export const addError = error => ({
    type: NEW_ERROR,
    error
  }),
  deleteError = error => ({
    type: DELETE_ERROR,
    error
  });

export const showNewError = error => dispatch => {
    dispatch(addError(error));
  },
  hideError = error => dispatch => {
    dispatch(deleteError(error));
  };

export const showError = error => dispatch => {
  dispatch(addError(error));
  dispatch(deleteError(error));
};
