import Posts from "./Posts";
import {
  updatePostTextActionCreator,
  addPostActionCreator
} from "../../../redux/profilePageReducer.js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  posts: state.profilePage.posts,
  postText: state.profilePage.postText
});

const mapDispatchToProps = dispatch => ({
  addPost: () => dispatch(addPostActionCreator()),

  changeText: text => dispatch(updatePostTextActionCreator(text))
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
