import squatMaxReducer from "./squatMaxReducer";
import benchMaxReducer from "./benchMaxReducer";
import deadMaxReducer from "./deadMaxReducer";
import workoutReducer from "./workoutReducer";
import exerciseSelectionReducer from "./exerciseSelectionReducer";
import topWeightReducer from "./topWeightReducer";
import topRepReducer from "./topRepReducer";
import backoffWeightReducer from "./backoffWeightReducer";
import backoffRepsReducer from "./backoffReps";
import setRowReducer from "./setRowReducer";
import monthReducer from "./monthReducer";
import dayReducer from "./dayReducer";
import yearReducer from "./yearReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  squatMax: squatMaxReducer,
  benchMax: benchMaxReducer,
  deadMax: deadMaxReducer,
  chosenWorkout: workoutReducer,
  exercise: exerciseSelectionReducer,
  setRow: setRowReducer,
  month: monthReducer,
  day: dayReducer,
  year: yearReducer,
  topWeight: topWeightReducer,
  topReps: topRepReducer,
  backoffWeight: backoffWeightReducer,
  backoffReps: backoffRepsReducer,
});

export default allReducers;
