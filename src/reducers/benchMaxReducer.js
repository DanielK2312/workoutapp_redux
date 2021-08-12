const benchMaxReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_BENCH":
      return action.payload;
    default:
      return state;
  }
};

export default benchMaxReducer;
