const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";

const initialState = {
  userList: [
    {
      logo:
        "https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg",
      id: 1,
      name: "Fedor",
      location: {
        country: "Ukraine",
        city: "Lviv"
      },
      description: "What a beautiful Duwang",
      followed: false
    },
    {
      logo:
        "https://i.pinimg.com/originals/51/40/69/5140696fcc077099bd92525eed882e7c.jpg",
      id: 2,
      name: "Gregor",
      location: {
        country: "Belarus",
        city: "Minsk"
      },
      description: "chew",
      followed: false
    }
  ]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        userList: state.userList.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        userList: state.userList.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };

    case SET_USERS:
      return {
        ...state,
        userList: [...state.userList, ...action.userList]
      };

    default:
      return state;
  }
};
export const followAction = userId => ({ type: FOLLOW_USER, userId }),
  unFollowAction = userId => ({ type: UNFOLLOW_USER, userId }),
  setUsersAction = userList => ({ type: SET_USERS, userList });

export default userReducer;
