import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import * as axios from "axios";
import { setProfile } from "../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 10;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

const mapDispatchToProps = {
  setProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
