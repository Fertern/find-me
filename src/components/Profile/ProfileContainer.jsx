import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUpProfile,
  setUpStatus,
  updateUpStatus
} from "../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.id;
    }
    this.props.setUpProfile(userId);
    this.props.setUpStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  id: state.auth.userId
});

const mapDispatchToProps = {
  setUpProfile,
  setUpStatus,
  updateUpStatus
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
