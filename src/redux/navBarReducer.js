const initialState = {
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
};

const navBarReducer = (state = initialState, action) => {
  return state;
};
export default navBarReducer;
