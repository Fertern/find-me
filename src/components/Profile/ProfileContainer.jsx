import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUpProfile } from "../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUpProfile(this.props.match.params.userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

const mapDispatchToProps = {
  setUpProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
