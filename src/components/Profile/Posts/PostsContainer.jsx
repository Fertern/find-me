import React from "react";
import Posts from "./Posts";
import { addNewPost } from "../../../redux/profilePageReducer.js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  posts: state.profilePage.posts
});

const mapDispatchToProps = {
  addNewPost
};

const PostsContainer = React.memo(props => <Posts {...props} />);

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
