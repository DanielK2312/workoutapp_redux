import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { days } from "../components/DropdownOptions";
import { useSelector, useDispatch } from "react-redux";
import { setDay } from "../actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 225,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const DayDropdown = () => {
  const reduxDays = useSelector((state) => state.day);

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
        <InputLabel id="demo-simple-select-outlined-label">Day</InputLabel>
        <Select
          value={reduxDays}
          onChange={(e) => dispatch(setDay(e.target.value))}
          label="Day"
        >
          {days.map((day) => {
            return (
              <MenuItem key={day.id} value={day.value}>
                {day.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default DayDropdown;
