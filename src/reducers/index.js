import squatMaxReducer from "./squatMaxReducer";
import benchMaxReducer from "./benchMaxReducer";
import deadMaxReducer from "./deadMaxReducer";
import workoutReducer from "./workoutReducer";
import dateReducer from "./dateReducer";
import exerciseSelectionReducer from "./exerciseSelectionReducer";
import volumeReducer from "./volumeReducer";
import setRowReducer from "./setRowReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  squatMax: squatMaxReducer,
  benchMax: benchMaxReducer,
  deadMax: deadMaxReducer,
  chosenWorkout: workoutReducer,
  date: dateReducer,
  exercise: exerciseSelectionReducer,
  volume: volumeReducer,
  setRow: setRowReducer,
});

export default allReducers;
