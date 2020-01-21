import React from "react";
import Posts from "./Posts";
import { connect } from "react-redux";
import {
  addNewPost,
  deletePost
} from "../../../redux/modules/profilePage/actions";

const mapStateToProps = state => ({
  posts: state.profilePage.posts
});

const mapDispatchToProps = {
  addNewPost,
  deletePost
};

const PostsContainer = React.memo(props => <Posts {...props} />);

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
