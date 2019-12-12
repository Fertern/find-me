import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let renderTree = state => {
  ReactDOM.render(
    <App state={state} store={store} />,
    document.getElementById("root")
  );
};
renderTree(store.getState());
store.subscribe(renderTree);

serviceWorker.unregister();
