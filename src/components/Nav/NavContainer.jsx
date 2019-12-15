import React from "react";
import Nav from "./Nav";
import StoreContext from "../../StoreContext";

const NavContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        const friends = store.getState().navBar.friends;
        return <Nav friendList={friends} />;
      }}
    </StoreContext.Consumer>
  );
};

export default NavContainer;
