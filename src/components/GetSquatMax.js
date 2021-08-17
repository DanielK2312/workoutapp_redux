// component keeps track of squat state
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "./ErrorMessage";
import { useState, useEffect } from "react";
import { setSquatMax } from "../actions";

const GetSquatMax = () => {
  // local state
  const [topSet, setTopSet] = useState("");
  const [backoffSet, setBackoffSet] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSets, setShowSets] = useState(false);

  // pull state from redux to be used and updated in component
  const squatMax = useSelector((state) => state.squatMax);
  // pull in useDispatch to execute
  const dispatch = useDispatch();

  // Change error state and show error message for 2 seconds
  useEffect(() => {
    if (showError === true) {
      setTimeout(() => setShowError(false), 2000);
    }
  }, [showError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // user input validation
    if (squatMax === "") {
      setShowError(true);
    } else {
      let topSet = Math.floor(squatMax * 0.75);
      let backoffSet = Math.floor(topSet * 0.7);

      setShowSets(true);
      setTopSet(topSet);
      setBackoffSet(backoffSet);
    }
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <h5 className="ui dividing header">Squat Max</h5>
        <input
          type="number"
          placeholder="Enter Squat Max in Pounds"
          onChange={(e) => dispatch(setSquatMax(e.target.value))}
          value={squatMax}
        />
        {showError === true ? <ErrorMessage /> : ""}
        <button
          style={{ marginTop: "10px" }}
          className="fluid teal ui button"
          type="submit"
        >
          Calculate Working Weight
        </button>
        {showSets ? (
          <div>
            <ul style={{ padding: "0", margin: "0" }}>
              <li style={{ listStyleType: "none", fontSize: "16px" }}>
                Top Set : {topSet} for 8-12 reps
              </li>
              <li style={{ listStyleType: "none", fontSize: "16px" }}>
                Backoff Set : {backoffSet} for 8-12 reps
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default GetSquatMax;
