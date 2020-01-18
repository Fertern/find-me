import { showError } from "../redux/errorsReducer";

const defaultErrorMessage = "Some server error. Please try later.";
export const thunkErrorDecorator = callback => (...args) => async (
  dispatch,
  getState
) => {
  try {
    await callback(...args)(dispatch, getState);
  } catch (error) {
    let errorMessage = error.message;
    if (errorMessage !== "Network Error") {
      errorMessage = defaultErrorMessage;
    }
    dispatch(showError([errorMessage]));
  }
};
