const backoffWeightReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_BACKOFFWEIGHT":
      return action.payload;
    default:
      return state;
  }
};

export default backoffWeightReducer;
