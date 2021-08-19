// setting state in Redux for all values to be entered into table
import React, { useState } from "react";

// dropdown menu imports
import MonthDropdown from "../dropdowns/MonthDropdown";
import DayDropdown from "../dropdowns/DayDropdown";
import YearDropdown from "../dropdowns/YearDropdown";
import WorkoutDropdown from "../dropdowns/WorkoutDropdown";
import ExerciseDropdown from "../dropdowns/ExerciseDropdown";

// redux functions
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
  // local state to store array of objects stored in table
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

  /**
   * Handles form submission
   * @param {event} e
   */
  const handleAddForm = (e) => {
    e.preventDefault();

    // if all inputs are valid, add to table
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

    dispatch(setWorkout(""));
    dispatch(setYear(""));
    dispatch(setMonth(""));
    dispatch(setDay(""));
    dispatch(setExercise(""));
    dispatch(setTableData(""));
    dispatch(setOneWeight(""));
    dispatch(setOneReps(""));
    dispatch(setTwoWeight(""));
    dispatch(setTwoReps(""));
  };

  // save state in local storage
  //////////////////////////////////////////////////////////////////
  // prevents state from refreshing after a render
  // useEffect(() => {
  //   const data = localStorage.getItem("track-workout");
  //   if (data) {
  //     setAddRow(JSON.parse(data));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("track-workout", JSON.stringify(addRow));
  // });

  /////////////////////////////////////////////////////////////////

  // stage dispatch to update state value
  const dispatch = useDispatch();
  // saving the rowData into redux as a state to be used in table row html
  dispatch(setTableData(addRow));

  return (
    <div>
      <div className="ui container">
        <form className="ui form" onSubmit={handleAddForm}>
          <h4 className="ui dividing header">Workout Information</h4>

          <div className="two fields">
            <div className="field">
              <WorkoutDropdown />
            </div>
            <div className="field">
              <ExerciseDropdown />
            </div>
          </div>

          <div className="three fields">
            <div className="field">
              <MonthDropdown />
            </div>
            <div className="field">
              <DayDropdown />
            </div>
            <div className="field">
              <YearDropdown />
            </div>
          </div>

          <div className="four fields">
            <div className="required field">
              <label>Set 1 (Top Set) Weight</label>
              <input
                type="number"
                placeholder="Weight in Pounds"
                required="required"
                autoComplete="off"
                onChange={(e) => dispatch(setOneWeight(e.target.value))}
                value={topWeight}
              ></input>
            </div>
            <div className="required field">
              <label>Set 1 Reps</label>
              <input
                type="number"
                placeholder="Number of Reps"
                required="required"
                autoComplete="off"
                onChange={(e) => dispatch(setOneReps(e.target.value))}
                value={topReps}
              ></input>
            </div>
            <div className="required field">
              <label>Set 2 (Backoff Set) Weight</label>
              <input
                type="number"
                placeholder="Weight in Pounds"
                required="required"
                autoComplete="off"
                onChange={(e) => dispatch(setTwoWeight(e.target.value))}
                value={backoffWeight}
              ></input>
            </div>
            <div className="required field">
              <label>Set 2 Reps</label>
              <input
                type="number"
                placeholder="Number of Reps"
                required="required"
                autoComplete="off"
                onChange={(e) => dispatch(setTwoReps(e.target.value))}
                value={backoffReps}
              ></input>
            </div>
          </div>

          <button className="fluid teal ui button" type="submit">
            Add Workout
          </button>
        </form>
      </div>

      <br />

      <div className="ui container">
        {/* table implementation */}
        <table className="ui small compact table">
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
    </div>
  );
};

export default TableDataInputs;
// check
