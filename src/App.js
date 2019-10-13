import React from "react";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
//another test

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile />
      </div>
    </div>
  );
};

export default App;
