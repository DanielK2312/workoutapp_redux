const deadMaxReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_DEAD":
      return action.payload;
    default:
      return state;
  }
};

export default deadMaxReducer;
