import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUpProfile,
  setUpStatus,
  updateUpStatus,
  setLastUser,
  setIsOwnProfile,
  setUpPhoto,
  setUpProfileData
} from "../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {
  restartProfile() {
    const {
      match,
      lastUser,
      id,
      setLastUser,
      setUpProfile,
      setUpStatus,
      setIsOwnProfile
    } = this.props;
    let userId = match.params.userId;
    if (!userId) {
      userId = lastUser;
      if (!userId) {
        userId = id;
      }
    }

    setLastUser(userId);
    setUpProfile(userId);
    setUpStatus(userId);
    setIsOwnProfile(+userId === id);
  }
  componentDidMount() {
    this.restartProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.restartProfile();
    }
  }
  render() {
    return (
      <div>
        {this.props.isPageLoading ? <Preloader /> : <Profile {...this.props} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  id: state.auth.userId,
  lastUser: state.profilePage.lastUser,
  isPageLoading: state.profilePage.isPageLoading,
  isOwnProfile: state.profilePage.isOwnProfile,
  errorMessage: state.profilePage.statusErrorMessage
});

const mapDispatchToProps = {
  setUpProfile,
  setUpStatus,
  updateUpStatus,
  setLastUser,
  setIsOwnProfile,
  setUpPhoto,
  setUpProfileData
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
