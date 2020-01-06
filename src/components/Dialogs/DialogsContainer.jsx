import Dialogs from "./Dialogs";
import { updateText, sendMessage } from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = {
  updateText,
  sendMessage
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
