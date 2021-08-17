// component keep track of bench state
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "./ErrorMessage";
import { setBenchMax } from "../actions";

const GetBenchMax = () => {
  // local state
  const [showError, showSetError] = useState(false);
  const [topSet, setTopSet] = useState("");
  const [backoffSet, setBackoffSet] = useState("");
  const [showTop, setShowTop] = useState(false);

  // pull state from reducer to be used and updated in component
  const benchMax = useSelector((state) => state.benchMax);
  // pull in useDispatch to execute action
  const dispatch = useDispatch();

  // Change error state and show error message for 2 seconds
  useEffect(() => {
    if (showError === true) {
      setTimeout(() => showSetError(false), 2000);
    }
  }, [showError]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // if user enters empty value, show error message
    if (benchMax === "") {
      showSetError(true);
    } else {
      let topSet = Math.floor(benchMax * 0.75);
      let backoffSet = Math.floor(topSet * 0.7);

      // set the top and back off set weights along with setting state to display to the user
      setTopSet(topSet);
      setBackoffSet(backoffSet);
      setShowTop(true);
    }
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <h5 className="ui dividing header">Bench Max</h5>
        <input
          type="number"
          placeholder="Enter Bench Max in Pounds"
          onChange={(e) => dispatch(setBenchMax(e.target.value))}
          value={benchMax}
        />
        {showError === true ? <ErrorMessage /> : ""}
        <button
          style={{ marginTop: "10px" }}
          className="fluid teal ui button"
          type="submit"
        >
          Calculate Working Weight
        </button>
        {showTop ? (
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

export default GetBenchMax;
