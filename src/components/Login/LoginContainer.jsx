import Login from "./Login";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  login
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
