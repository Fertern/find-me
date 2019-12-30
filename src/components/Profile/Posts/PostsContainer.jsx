import Posts from "./Posts";
import { updatePost, addPost } from "../../../redux/profilePageReducer.js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  posts: state.profilePage.posts,
  postText: state.profilePage.postText
});

const mapDispatchToProps = {
  addPost,
  updatePost
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
