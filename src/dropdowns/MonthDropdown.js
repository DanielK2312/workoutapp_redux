import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { months } from "../components/DropdownOptions";
import { useSelector, useDispatch } from "react-redux";
import { setMonth } from "../actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 225,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const MonthDropdown = () => {
  const month = useSelector((state) => state.month);

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
        <InputLabel id="demo-simple-select-outlined-label">Month</InputLabel>
        <Select
          value={month}
          onChange={(e) => dispatch(setMonth(e.target.value))}
          label="Month"
        >
          {months.map((month) => {
            return (
              <MenuItem key={month.id} value={month.value}>
                {month.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default MonthDropdown;
