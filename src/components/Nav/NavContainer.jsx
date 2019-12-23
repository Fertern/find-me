import Nav from "./Nav";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  friendList: state.navBar.friends
});

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;
