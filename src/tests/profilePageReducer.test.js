import profilePageReducer, {
  addPost
} from "../redux/module/profilePage/actions";

const state = {
  posts: [
    { id: 1, message: "ZA WARUDO", likes: "20" },
    { id: 2, message: "TOKI WO TOMARE", likes: "0" }
  ]
};

it("Len of posts test", () => {
  const action = addPost("some test text"),
    newState = profilePageReducer(state, action);

  expect(newState.posts.length).toBe(3);
});
