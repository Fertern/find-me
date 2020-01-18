import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";

const ErrorNotification = ({ errors, errorsCount }) => {
  if (errors.length > 0) {
    let errorMessage = errors[errorsCount - 1][0];
    const isConnectionError = errorMessage === "Network Error";
    if (isConnectionError) {
      errorMessage = (
        <div className="connection-error">
          You are offline. <br /> Please try later or check your connection.
        </div>
      );
    }

    toast(
      <div
        className={
          isConnectionError ? "connection-error-wrapper" : "error-wrapper"
        }
      >
        <span className="warning-emoji">
          <i className="fa fa-exclamation-triangle"></i>
        </span>
        <span className="error-right">
          <div className="error-label">Error:</div>
          <div>{errorMessage}</div>
        </span>
      </div>
    );
  }
  return (
    <ToastContainer
      position="top-center"
      autoClose={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      className="error"
      toastClassName="errors"
    />
  );
};

export default connect(state => ({
  errors: state.errors.error,
  errorsCount: state.errors.errorsCount
}))(ErrorNotification);
