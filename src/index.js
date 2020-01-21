import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { checkAuth } from "./redux/modules/auth/actions";

store.dispatch(checkAuth());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
