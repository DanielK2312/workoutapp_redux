const backoffRepsReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_BACKOFFREPS":
      return action.payload;
    default:
      return state;
  }
};

export default backoffRepsReducer;
