import Dialogs from "./Dialogs";
import { addNewMessage } from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => ({
  dialogsPage: state.dialogsPage
});
const mapDispatchToProps = {
  addNewMessage
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
