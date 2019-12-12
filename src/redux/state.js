let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "ZA WARUDO", likes: "20" },
        { id: 2, message: "TOKI WO TOMARE", likes: "0" }
      ],
      postText: "Write something...."
    },
    dialogsPage: {
      messages: [
        { id: 1, text: "I just wanna learn" },
        { id: 2, text: "You're my head" },
        { id: 3, text: "I just wanna live" },
        { id: 4, text: "You're my best" }
      ],
      dialogs: [
        { id: 1, name: "First", count: 1 },
        { id: 2, name: "Second", count: 1 },
        { id: 3, name: "Thirst", count: 1 },
        { id: 4, name: "Fourth", count: 1 }
      ],
      messageText: "Write something.."
    },
    navBar: {
      friends: [
        {
          id: 1,
          name: "Isaac",
          logo:
            "https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg"
        },
        {
          id: 2,
          name: "Mezo",
          logo:
            "https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg"
        },
        {
          id: 3,
          name: "Strange",
          logo:
            "https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg"
        }
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("Subscribe doesn't work!");
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },
  addPost() {
    let newPost = {
      id: `f${(+new Date()).toString(16)}`,
      message: this._state.profilePage.postText,
      likes: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.postText = "";
    this._callSubscriber(this._state);
  },
  updatePostText(text) {
    this._state.profilePage.postText = text;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: `f${(+new Date()).toString(16)}`,
      text: this._state.dialogsPage.messageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.messageText = "";
    this._callSubscriber(this._state);
  },
  updateMessageText(text) {
    this._state.dialogsPage.messageText = text;
    this._callSubscriber(this._state);
  }
};

export default store;
//store - OOP
