import Dialogs from "./Dialogs";
import {
  addNewMessage,
  setUpDialogs
} from "../../redux/modules/dialogsPage/actions";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages
});
const mapDispatchToProps = {
  addNewMessage,
  setUpDialogs
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
