import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./StoreContext";

let renderTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

renderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});

serviceWorker.unregister();
