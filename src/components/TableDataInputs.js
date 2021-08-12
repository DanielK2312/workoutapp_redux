// setting state in Redux for all values to be entered into table
import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { workoutOptions } from "./WorkoutOptions";
import { Dropdown } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setWorkout,
  setYear,
  setMonth,
  setDay,
  setExercise,
  setTableData,
  setOneWeight,
  setOneReps,
  setTwoWeight,
  setTwoReps,
} from "../actions";

const TableDataInputs = () => {
  // check if user selected a dropdown value, error message if not
  const [dropdownInput, setdropdownInput] = useState(false);
  // state to choose to display error message
  const [errorMessage, setErrorMessage] = useState(false);
  // state to store array of objects stored in table
  const [addRow, setAddRow] = useState([
    {
      id: 1,
      workout: "",
      exercise: "",
      month: "",
      day: "",
      year: "",
      setOneWeight: "",
      setOneReps: "",
      setTwoWeight: "",
      setTwoReps: "",
    },
  ]);

  // check state of error message on re-render to make error message disappear after 3 seconds
  useEffect(() => {
    if (errorMessage === true) {
      setTimeout(() => setErrorMessage(false), 3000);
    }
  }, [errorMessage]);

  // Redux stored states, used to set new table rows
  const workout = useSelector((state) => state.chosenWorkout);
  const exercise = useSelector((state) => state.exercise);
  const month = useSelector((state) => state.month);
  const day = useSelector((state) => state.day);
  const year = useSelector((state) => state.year);
  const topWeight = useSelector((state) => state.topWeight);
  const topReps = useSelector((state) => state.topReps);
  const backoffWeight = useSelector((state) => state.backoffWeight);
  const backoffReps = useSelector((state) => state.backoffReps);

  const handleAddForm = (e) => {
    if (dropdownInput === false) {
      e.preventDefault();
      setErrorMessage(true);
    } else {
      e.preventDefault();

      const updateRows = [
        // copy the current addRow state
        ...addRow,
        // now you can add a new object to add to the array
        {
          // using the length of the array for a unique id
          id: addRow.length + 1,
          // add workout state from redux
          workout: workout,
          // add date state from redux
          month: month,
          day: day,
          year: year,
          // add exercise state from redux
          exercise: exercise,
          // add state from redux
          topWeight,
          topReps,
          backoffWeight,
          backoffReps,
        },
      ];
      // update the state to the addRow array
      setAddRow(updateRows);
    }
  };

  // stage dispatch to update state value
  const dispatch = useDispatch();
  // saving the rowData into redux as a state to be used in table row html
  dispatch(setTableData(addRow));

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={handleAddForm}>
        <h4 className="ui dividing header">Workout Information</h4>

        <div className="two fields">
          <div className="field">
            <label>Workout</label>
            <Dropdown
              placeholder="Select Workout"
              fluid
              selection
              options={workoutOptions}
              name="workout"
              // update chosenWorkout state saved in Redux
              onChange={(e) =>
                dispatch(setWorkout(e.target.outerText), setdropdownInput(true))
              }
            />
            {errorMessage === false ? "" : <ErrorMessage />}
          </div>
          <div className="field">
            <label>Exercise</label>
            <input
              type="text"
              name="exercise"
              required="required"
              autoComplete="off"
              onChange={(e) => dispatch(setExercise(e.target.value))}
              value={exercise}
            ></input>
          </div>
        </div>

        <div className="three fields">
          <div className="field">
            <label>Month</label>
            <input
              type="text"
              placeholder="Month"
              required="required"
              autoComplete="off"
              // update state of date stored in Redux
              onChange={(e) => dispatch(setMonth(e.target.value))}
            ></input>
          </div>
          <div className="field">
            <label>Day</label>
            <input
              type="text"
              placeholder="Day"
              required="required"
              autoComplete="off"
              // update state of date stored in Redux
              onChange={(e) => dispatch(setDay(e.target.value))}
            ></input>
          </div>
          <div className="field">
            <label>Year</label>
            <input
              type="text"
              placeholder="Year"
              required="required"
              autoComplete="off"
              // update state of date stored in Redux
              onChange={(e) => dispatch(setYear(e.target.value))}
            ></input>
          </div>
        </div>

        <div className="four fields">
          <div className="field">
            <label>Set 1 (Top Set) Weight</label>
            <input
              type="text"
              required="required"
              autoComplete="off"
              onChange={(e) => dispatch(setOneWeight(e.target.value))}
              value={topWeight}
            ></input>
          </div>
          <div className="field">
            <label>Set 1 Reps</label>
            <input
              type="text"
              required="required"
              autoComplete="off"
              onChange={(e) => dispatch(setOneReps(e.target.value))}
              value={topReps}
            ></input>
          </div>
          <div className="field">
            <label>Set 2 (Backoff Set) Weight</label>
            <input
              type="text"
              required="required"
              autoComplete="off"
              onChange={(e) => dispatch(setTwoWeight(e.target.value))}
              value={backoffWeight}
            ></input>
          </div>
          <div className="field">
            <label>Set 2 Reps</label>
            <input
              type="text"
              required="required"
              autoComplete="off"
              onChange={(e) => dispatch(setTwoReps(e.target.value))}
              value={backoffReps}
            ></input>
          </div>
        </div>

        <button className="fluid ui button" type="submit">
          Add Workout
        </button>
      </form>

      {/* table implementation */}
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Workout</th>
            <th>Exercise</th>
            <th>Month</th>
            <th>Day</th>
            <th>Year</th>
            <th>Set 1 Weight</th>
            <th>Set 1 Reps</th>
            <th>Set 2 Weight</th>
            <th>Set 2 Reps</th>
          </tr>
        </thead>
        <tbody>
          {addRow.slice(1).map((row) => (
            <tr key={row.id}>
              <td>{row.workout}</td>
              <td>{row.exercise}</td>
              <td>{row.month}</td>
              <td>{row.day}</td>
              <td>{row.year}</td>
              <td>{row.topWeight}</td>
              <td>{row.topReps}</td>
              <td>{row.backoffWeight}</td>
              <td>{row.backoffReps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDataInputs;
