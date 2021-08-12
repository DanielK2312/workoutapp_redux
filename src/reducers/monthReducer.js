const monthReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_MONTH":
      return action.payload;
    default:
      return state;
  }
};

export default monthReducer;
