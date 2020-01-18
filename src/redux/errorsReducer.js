const NEW_ERROR = "/errors/NEW-ERROR";
const DELETE_ERROR = "/errors/DELETE-ERRORS";

const initialState = {
  error: [],
  errorsCount: 0
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ERROR:
      const newErrorArray = [...state.error];
      newErrorArray.push(action.error);
      return {
        ...state,
        error: newErrorArray,
        errorsCount: newErrorArray.length
      };
    case DELETE_ERROR:
      const newErrorArrayWithoutOldError = [
        ...state.error.filter(err => err !== action.error)
      ];
      return {
        ...state,
        error: newErrorArrayWithoutOldError,
        errorsCount: newErrorArrayWithoutOldError.length
      };
    default:
      return state;
  }
};

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

export default errorsReducer;
