const topWeightReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_ONEWEIGHT":
      return action.payload;
    default:
      return state;
  }
};

export default topWeightReducer;
