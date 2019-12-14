import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//arrays
const App = props => {
  return (
    <Router>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Nav state={props.state.navBar} />
          <div className="app-content">
            <Route
              path="/dialogs"
              render={() => <DialogsContainer store={props.store} />}
            />
            <Route
              path="/profile"
              render={() => <ProfileContainer store={props.store} />}
            />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
