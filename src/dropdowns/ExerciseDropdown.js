import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { pull, push, legs } from "../components/DropdownOptions";
import { useSelector, useDispatch } from "react-redux";
import { setExercise } from "../actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 225,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const PullDropdown = () => {
  // pull in Exercise state to use
  const reduxExercise = useSelector((state) => state.exercise);
  // pull in chosenWorkout state to conditionally render exercises
  const reduxChosenWorkout = useSelector((state) => state.chosenWorkout);

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="ui container">
      <FormControl
        fullWidth
        variant="outlined"
        required
        className={classes.formControl}
      >
        <InputLabel id="demo-simple-select-outlined-label">Exercise</InputLabel>
        {/* If user has not chosen a workout, a list of exercises will not render */}
        {reduxChosenWorkout === "" && (
          <Select value="" label="Exercise">
            <MenuItem></MenuItem>
          </Select>
        )}
        {/* If Pull is selected, render only pull exercises */}
        {reduxChosenWorkout === "Pull" && (
          <Select
            value={reduxExercise}
            onChange={(e) => dispatch(setExercise(e.target.value))}
            label="Exercise"
          >
            {pull.map((exercise) => {
              return (
                <MenuItem key={exercise.id} value={exercise.value}>
                  {exercise.value}
                </MenuItem>
              );
            })}
          </Select>
        )}
        {reduxChosenWorkout === "Push" && (
          <Select
            value={reduxExercise}
            onChange={(e) => dispatch(setExercise(e.target.value))}
            label="Exercise"
          >
            {push.map((exercise) => {
              return (
                <MenuItem key={exercise.id} value={exercise.value}>
                  {exercise.value}
                </MenuItem>
              );
            })}
          </Select>
        )}
        {reduxChosenWorkout === "Legs" && (
          <Select
            value={reduxExercise}
            onChange={(e) => dispatch(setExercise(e.target.value))}
            label="Exercise"
          >
            {legs.map((exercise) => {
              return (
                <MenuItem key={exercise.id} value={exercise.value}>
                  {exercise.value}
                </MenuItem>
              );
            })}
          </Select>
        )}
      </FormControl>
    </div>
  );
};

export default PullDropdown;
