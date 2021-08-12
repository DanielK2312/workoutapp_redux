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

export const setMonth = (month) => {
  return {
    type: "SET_MONTH",
    payload: month,
  };
};

export const setDay = (day) => {
  return {
    type: "SET_DAY",
    payload: day,
  };
};

export const setYear = (year) => {
  return {
    type: "SET_YEAR",
    payload: year,
  };
};

export const setExercise = (exercise) => {
  return {
    type: "SET_EXERCISE",
    payload: exercise,
  };
};

export const setOneWeight = (top) => {
  return {
    type: "SET_ONEWEIGHT",
    payload: top,
  };
};

export const setOneReps = (rep) => {
  return {
    type: "SET_ONEREPS",
    payload: rep,
  };
};

export const setTwoWeight = (backoff) => {
  return {
    type: "SET_BACKOFFWEIGHT",
    payload: backoff,
  };
};

export const setTwoReps = (brep) => {
  return {
    type: "SET_BACKOFFREPS",
    payload: brep,
  };
};

export const setTableData = (workoutObj) => {
  return {
    type: "SET_ROW",
    payload: workoutObj,
  };
};
