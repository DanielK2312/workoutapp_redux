// setting state in Redux for all values to be entered into table
import React, { useState } from "react";
import { workoutOptions } from "./WorkoutOptions";
import { Dropdown } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setWorkout,
  setDate,
  setExercise,
  setVolume,
  setTableData,
} from "../actions";
// check

const TableDataInputs = () => {
  // state to store array of objects stored in table
  const [addRow, setAddRow] = useState([
    {
      id: 1,
      workout: "",
      exercise: "",
      date: "",
      volume: "",
    },
  ]);
  // Redux stored states, used to set new table rows
  const workout = useSelector((state) => state.chosenWorkout);
  const exercise = useSelector((state) => state.exercise);
  const volume = useSelector((state) => state.volume);
  const date = useSelector((state) => state.date);

  const handleAddForm = (e) => {
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
        date: date,
        // add exercise state from redux
        exercise: exercise,
        // add volume state from redux
        volume: volume,
      },
    ];
    // update the state to the addRow array
    setAddRow(updateRows);
  };

  // stage dispatch to update state value
  const dispatch = useDispatch();
  // saving the rowData into redux as a state to be used in table row html
  dispatch(setTableData(addRow));

  /**
   * @param {Object from Calendar} date
   * @returns String in correct date format
   */
  const refactorDate = (date) => {
    // convert date from object to string
    let dateArr = JSON.stringify(date.target.valueAsDate);
    // extract year from the string
    let year = dateArr.slice(1, 5);
    // extract month from the string
    let month = dateArr.slice(6, 8);
    // extract day from the string
    let day = dateArr.slice(9, 11);
    // reformat in the correct MM/DD/YYYY format
    let combinedDate = `${month}/${day}/${year}`;

    return combinedDate;
  };

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={handleAddForm}>
        <h4 className="ui dividing header">Workout Information</h4>
        <div className="field">
          <label>Workout</label>
          <Dropdown
            placeholder="Select Workout"
            fluid
            selection
            required="required"
            options={workoutOptions}
            name="workout"
            // update chosenWorkout state saved in Redux
            onChange={(e) => dispatch(setWorkout(e.target.outerText))}
          />
        </div>
        <div className="two fields">
          <div className="field">
            <label>Date/Time</label>
            <div className="ui calendar">
              <div className="ui input">
                <input
                  type="date"
                  placeholder="Date/Time"
                  required="required"
                  // update state of date stored in Redux
                  onChange={(e) => dispatch(setDate(refactorDate(e)))}
                ></input>
              </div>
            </div>
          </div>
          {/* conditionally render a dropdown based off of the chosenWorkout State, plan to refactor everything below after testing */}
          <div className="field">
            <label>Exercise</label>
            <input
              type="text"
              name="exercise"
              required="required"
              onChange={(e) => dispatch(setExercise(e.target.value))}
              value={exercise}
            ></input>
          </div>
        </div>
        <div className="field">
          <label>Sets/Reps</label>
          <input
            type="text"
            name="volume"
            required="required"
            onChange={(e) => dispatch(setVolume(e.target.value))}
            value={volume}
          ></input>
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
            <th>Date (mm/dd/yyyy)</th>
            <th>Exercise</th>
            <th>Sets/Reps</th>
          </tr>
        </thead>
        <tbody>
          {addRow.slice(1).map((row) => (
            <tr key={row.id}>
              <td>{row.workout}</td>
              <td>{row.date}</td>
              <td>{row.exercise}</td>
              <td>{row.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDataInputs;
