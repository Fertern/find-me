import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext from "./StoreContext";

let renderTree = state => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App store={store} />
    </StoreContext.Provider>,
    document.getElementById("root")
  );
};

renderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});

serviceWorker.unregister();
