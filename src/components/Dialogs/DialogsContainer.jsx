import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator
} from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";

let mapStateToProps = state => ({
  dialogsPage: state.dialogsPage
});
let mapDispatchToProps = dispatch => ({
  updateText: text => dispatch(updateMessageTextActionCreator(text)),
  sendMessage: () => dispatch(addMessageActionCreator())
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
