export const setBenchMax = (n) => {
  return {
    type: "SET_BENCH",
    payload: n,
  };
};

export const setSquatMax = (n) => {
  return {
    type: "SET_SQUAT",
    payload: n,
  };
};

export const setDeadMax = (n) => {
  return {
    type: "SET_DEAD",
    payload: n,
  };
};

export const setWorkout = (workoutChose) => {
  return {
    type: "SET_WORKOUT",
    payload: workoutChose,
  };
};

export const setDate = (dateInput) => {
  return {
    type: "SET_DATE",
    payload: dateInput,
  };
};

export const setExercise = (exercise) => {
  return {
    type: "SET_EXERCISE",
    payload: exercise,
  };
};

export const setVolume = (volume) => {
  return {
    type: "SET_VOLUME",
    payload: volume,
  };
};

export const setTableData = (workoutObj) => {
  return {
    type: "SET_ROW",
    payload: workoutObj,
  };
};
