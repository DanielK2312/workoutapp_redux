import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { years } from "../components/DateDropdownOptions";
import { useSelector, useDispatch } from "react-redux";
import { setYear } from "../actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 225,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const YearDropdown = () => {
  const reduxYear = useSelector((state) => state.year);

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="ui container">
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
        <Select
          value={reduxYear}
          onChange={(e) => dispatch(setYear(e.target.value))}
          label="Year"
        >
          {years.map((year) => {
            return (
              <MenuItem key={year.id} value={year.value}>
                {year.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default YearDropdown;
