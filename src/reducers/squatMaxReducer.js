const squatMaxReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SQUAT":
      return action.payload;
    default:
      return state;
  }
};

export default squatMaxReducer;
