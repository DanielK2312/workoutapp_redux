const topRepReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_ONEREPS":
      return action.payload;
    default:
      return state;
  }
};

export default topRepReducer;
