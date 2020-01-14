import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  id: state.auth.userId
});

const mapDispatchToProps = { logout };

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
