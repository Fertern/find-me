import { NEW_ERROR, DELETE_ERROR } from "./selectors";

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

export default errorsReducer;
