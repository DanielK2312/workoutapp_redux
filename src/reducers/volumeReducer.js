const volumeReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_VOLUME":
      return action.payload;
    default:
      return state;
  }
};

export default volumeReducer;
