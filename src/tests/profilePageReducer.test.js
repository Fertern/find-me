import { addNewPost } from "../redux/modules/profilePage/actions";
import profilePageReducer from "../redux/modules/profilePage/reducer";

const state = {
  posts: [{ id: 1, message: "ZA WARUDO", likes: "20" }]
};

it("Len of posts test", () => {
  const action = addNewPost("some test text"),
    newState = profilePageReducer(state, action);

  expect(newState.posts.length).toBe(1);
});
