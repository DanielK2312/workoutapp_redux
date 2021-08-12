const setRowReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ROW":
      return action.payload;
    default:
      return state;
  }
};

export default setRowReducer;
