import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { workout } from "../components/DropdownOptions";
import { useSelector, useDispatch } from "react-redux";
import { setWorkout } from "../actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 225,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const WorkoutDropdown = () => {
  const reduxWorkout = useSelector((state) => state.chosenWorkout);

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="ui container">
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Workout</InputLabel>
        <Select
          value={reduxWorkout}
          onChange={(e) => dispatch(setWorkout(e.target.value))}
          label="Workout"
        >
          {workout.map((workout) => {
            return (
              <MenuItem key={workout.id} value={workout.value}>
                {workout.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default WorkoutDropdown;
